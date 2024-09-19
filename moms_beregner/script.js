"use strict";

function beregnMoms(beloeb, moms = 25) {
  const samletBeloeb = beloeb + beloeb * (moms / 100);
  console.log(`Beløb med moms: ${samletBeloeb}`);
}

beregnMoms(100);
