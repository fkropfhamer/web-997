import '../../../../styles/about.css';
import { onSubmit } from './about';

function main() {
    document.getElementById('question-form').addEventListener('submit', onSubmit, false);   
}

main();
