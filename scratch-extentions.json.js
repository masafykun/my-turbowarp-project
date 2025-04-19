class ChatGPTExtension {
  getInfo() {
    return {
      id: "chatgpt",
      name: "ChatGPT",
      blocks: [
        {
          opcode: "askGPT",
          blockType: Scratch.BlockType.REPORTER,
          text: "ChatGPTに[TEXT]と聞く",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "こんにちは！",
            },
          },
        },
      ],
    };
  }

  async askGPT(args) {
    let res;
    try {
      res = await fetch("https://scratch-bot.masafy.org/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: args.TEXT }),
      });
    } catch (e) {
      return "通信エラーが発生しました";
    }

    // 429 のときだけ IP 制限メッセージ
    if (res.status === 429) {
      return "今日はたくさんお話ししたね！もしもっと話したかったらマサフィーに聞いてみて！";
    }
    // その他エラー
    if (!res.ok) {
      return `エラー: ${res.status}`;
    }

    // 正常レスポンス
    let data;
    try {
      data = await res.json();
    } catch {
      return "レスポンスの解析に失敗しました";
    }
    return data.response || "エラーが発生しました";
  }
}

Scratch.extensions.register(new ChatGPTExtension());
