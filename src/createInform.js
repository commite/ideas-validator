import FileSaver from 'file-saver';
import { MANIPULATION_MATRIX_EQUIVALENCY } from "./components/ManipulationMatrix/index";
import { PAIN_MATRIX_EQUIVALENCY } from "./components/PainMatrix/index";

export const createInform = (values) => {
    const {
        name,
        what,
        why,
        who,
        manipulationMatrix,
        painMatrix,
        pressReleaseTitle,
        pressReleaseSubtitle,
        pressReleaseProblem,
        pressReleaseSolution,
        competitiveAnalysis,
        redRoutesKeyTasks,
        redRoutesSecondaryTasks
    } = values;

    const MDFile = new File([`
## Product definition
        
# Initial idea

### Product name
${name || '-'}

### What do we want create?
${what || '-'}

### Why do we want create it?
${why ||'-'}

### Who is going to use it?
${who || '-'}

# Manipulation matrix
${manipulationMatrix ? MANIPULATION_MATRIX_EQUIVALENCY[manipulationMatrix] : '-'}

# Pain matrix
${painMatrix ? PAIN_MATRIX_EQUIVALENCY[painMatrix] : '-'}

# Press release

### Title
${pressReleaseTitle || '-'}

### Subtitle
${pressReleaseSubtitle || '-'}

### Problem
${pressReleaseProblem || '-'}

### Solution
${pressReleaseSolution || '-'}

# Competitive analysis

${competitiveAnalysis.map(element =>
`
## ${element.name}

### Strong points
${element.doesWell || '-'}

### Weak points
${element.doesBad || '-'}

`).join('')}
# Red routes

### Main tasks (All time / All users)
${redRoutesKeyTasks.map(task => `* ${task}\n`).join('')}

### Secondary tasks (Sometimes / Some users)
${redRoutesSecondaryTasks.map(task => `* ${task}\n`).join('')}

        `], `idea-${name}-validation.MD`, {type: "text/plain;charset=utf-8"});
    const JSONFile = new File([JSON.stringify(values)], `idea-${name}-validation.json`, {type: "text/plain;charset=utf-8"})

    FileSaver.saveAs(MDFile);
    FileSaver.saveAs(JSONFile);
}