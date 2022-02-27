oh-my-posh --init --shell pwsh --config ~/Documents/bubblesextra.omp.json | Invoke-Expression
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Enable-PoshTransientPrompt
