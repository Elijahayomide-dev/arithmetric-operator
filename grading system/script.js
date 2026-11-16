function normalizeSchool(value) {
    const cleaned = String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/[_\-]+/g, ' ')
        .replace(/\s+/g, ' ');

    const aliases = {
        'secondary': 'secondary',
        'secondary school': 'secondary',
        'seccondary': 'secondary',
        'seccondary school': 'secondary',
        'polytechnic': 'polytechnic',
        'polytechnic school': 'polytechnic',
        'university': 'university',
        'universities': 'university',
        'university school': 'university'
    };

    return aliases[cleaned] || cleaned;
}

function getGrade(score, school) {
    const schoolRules = {
        secondary: { excellent: 70, veryGood: 60, good: 50, pass: 40, fail: 30 },
        polytechnic: { excellent: 80, veryGood: 70, good: 60, pass: 50, fail: 40 },
        university: { excellent: 70, veryGood: 60, good: 50, pass: 40, fail: 30 }
    };

    const rules = schoolRules[school];

    if (!rules) {
        return 'Please select a valid school type.';
    }

    if (score >= rules.excellent) return 'Excellent';
    if (score >= rules.veryGood) return 'Very Good';
    if (score >= rules.good) return 'Good';
    if (score >= rules.pass) return 'Pass';
    if (score >= rules.fail) return 'Fail';

    return 'Fail';
}

function checkGrade() {
    const schoolInput = document.getElementById('school');
    const scoreInput = document.getElementById('score');
    const result = document.getElementById('result');
    const resultWrap = result ? result.closest('.result-wrap') : null;

    if (!result) {
        return;
    }

    function showResult(message, status) {
        result.textContent = message;

        if (resultWrap) {
            resultWrap.classList.remove('is-success', 'is-failure', 'is-error');
            if (status) {
                resultWrap.classList.add(status);
            }
        }
    }

    const school = normalizeSchool(schoolInput ? schoolInput.value : '');
    const rawScore = scoreInput ? scoreInput.value : '';
    const score = Number(rawScore);

    if (!school) {
        showResult('Please select a school type.', 'is-error');
        return;
    }

    if (rawScore === '' || rawScore === null || Number.isNaN(score)) {
        showResult('Please enter your score.', 'is-error');
        return;
    }

    if (score < 0 || score > 100) {
        showResult('Please enter a score between 0 and 100.', 'is-error');
        return;
    }

    const grade = getGrade(score, school);
    showResult(grade, grade === 'Fail' ? 'is-failure' : 'is-success');
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button[type="button"]');

    if (button) {
        button.addEventListener('click', checkGrade);
    }
});