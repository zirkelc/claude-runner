import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('claudeRunner.runClaude', (uri: vscode.Uri) => {
        if (uri && uri.fsPath) {
            const folderPath = uri.fsPath;
            
            const terminal = vscode.window.createTerminal({
                name: 'Claude',
                cwd: folderPath,
                iconPath: {
                    light: vscode.Uri.file(path.join(context.extensionPath, 'icons', 'claude-black.svg')),
                    dark: vscode.Uri.file(path.join(context.extensionPath, 'icons', 'claude-white.svg'))
                }
            });
            
            terminal.show();
            terminal.sendText('claude', true);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}