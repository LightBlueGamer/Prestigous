import Topgg from "@top-gg/sdk"
import express from "express"
const app = express()
import "dotenv/config";
import { voteReward } from "../modules/functions";
const webhook = new Topgg.Webhook(process.env.GGAUTH)

app.post("/dblwebhook", webhook.listener(async (vote) => {
  try {
    voteReward(vote.user, vote.type);
  } catch (error) {
    console.log(error);
  }
}))

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});