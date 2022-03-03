var e={name:"+",description:"Fig shortcuts",subcommands:[{icon:"\u{1F4BB}",name:"Jump to autocomplete repo",insertValue:`\b\bcd ~/.fig/projects/autocomplete
`,description:"Go ~/.fig/projects/autocomplete"},{icon:"\u{1F6E0}",name:"Start dev server",insertValue:"\b\bnpm run dev",description:"Npm run dev"},{icon:"fig://icon?type=github",name:"withfig/autocomplete",insertValue:"\b\bopen https://github.com/withfig/autocomplete",description:"Open Fig Autocomplete Github page"},{name:"Good Morning! \u2600\uFE0F",icon:"\u2600\uFE0F",description:"Update brew, NPM and node. Say an inspirational quote",insertValue:`
      brew update;
      npm install npm@latest -g; 
      npm update -g;
      brew upgrade node;
      echo;
      npx -y fortuity | npx -y cowsay;
      echo;
      `}]},t=e;export{t as default};
