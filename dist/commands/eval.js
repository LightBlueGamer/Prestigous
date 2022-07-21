import { codeBlock } from 'discord.js';
export default {
    devCmd: false,
    permLevel: 9,
    data: {
        name: 'eval',
        type: 3
    },
    async execute(interaction) {
        async function clean(client, text) {
            if (text && text.constructor.name == 'Promise')
                text = await text;
            if (typeof text !== 'string')
                text = (await import('util')).inspect(text, { depth: 1 });
            text = text
                .replace(/`/g, '`' + String.fromCharCode(8203))
                .replace(/@/g, '@' + String.fromCharCode(8203))
                .replaceAll(interaction.client.token, '||[REDACTED]||');
            return text;
        }
        function cleanInput(content) {
            const regex = /^```(?:js|javascript)\n([\s\S]*?)```$/;
            const input = regex.test(content);
            if (input)
                content = content.match(regex)[1];
            else if (content.startsWith('```') && content.endsWith('```')) {
                content = content.split('```');
                content.shift();
                content.pop();
                content = content.join(' ');
            }
            return content;
        }
        await interaction.deferReply({ ephemeral: true });
        const message = interaction.channel.messages.resolve(interaction.targetId);
        const code = cleanInput(message.content);
        try {
            const evaled = eval('(async()=>{' + code + '})()');
            const cleaned = await clean(interaction.client, evaled);
            const MAX_CHARS = 3 + 2 + cleaned.length + 3;
            if (MAX_CHARS > 4000) {
                await interaction.editReply('Output exceeded 4000 characters. Sending as a file.', {
                    files: [{ attachment: Buffer.from(cleaned), name: 'output.txt' }]
                });
            }
            await interaction.editReply(codeBlock('js', cleaned));
        }
        catch (err) {
            console.log(err);
        }
    }
};
//# sourceMappingURL=eval.js.map