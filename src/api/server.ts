import Topgg from "@top-gg/sdk"
import express from "express"
const app = express()
import "dotenv/config";
const webhook = new Topgg.Webhook(process.env.GGAUTH)

app.post("/dblwebhook", webhook.listener(vote => {
  console.log(vote.user)
}))

app.listen(8080, () => {
    console.log("Listening on port 8080")
});