oh-my-posh --init --shell pwsh --config ~/oh-my-posh/themes/anthony-detailed.omp.json | Invoke-Expression
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Enable-PoshTransientPrompt
