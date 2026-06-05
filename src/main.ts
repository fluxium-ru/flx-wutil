// made by fluxium.ru
// version 1.0
// todo:
// - add CLI for easier usage
// - potentially package and deploy

type DiscordWebhookPayload = {
    content: string
}

const myPayload: DiscordWebhookPayload = { content: "CONTENT_HERE!" }

class FlxWspam {
    private webhookURL: string = "REMOVED" // place webhook url here

    public async SendPayload(): Promise<void> {
        fetch(this.webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myPayload)
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully!');
            } else {
                console.error('Failed to send message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error: ', error);
        })
    };
}

const mySpam = new FlxWspam();
mySpam.SendPayload();