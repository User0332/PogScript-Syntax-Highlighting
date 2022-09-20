import * as vscode from "vscode"

vscode.languages.registerHoverProvider(
	"pogscript",
	{
		provideHover(document, pos, token) {
			return {
				contents: ["test"]
			}
		}
	}
)