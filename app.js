let resultado = [];

let applyName = false;
let applyApproved = false;
const NAME = 'ACME';
const APPROVED = true;

let items = [
    {
        id: '8IKZHZZV80',
        accountName: 'ACME',
        closeDate: '4/14/2020',
        stage: 'Prospecting',
        confidence: '30%',
        approved: true
    },
    {
        id: '5GJOOOPWU7',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        approved: false
    },
    {
        id: '8IKZHZZV81',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Closed Won',
        confidence: '7%',
        approved: true
    },
];

function addFiltersUp(arreglo, apply1, apply2) {
    if (apply1 === true) {
        arreglo = arreglo.filter(function accountName(element) {
            if (element.accountName === NAME) {
                return true;
            }
        });
    }

    if (apply2 === true) {
        arreglo = arreglo.filter(function approvedOpp(element) {
            if (element.approved === APPROVED) {
                return true;
            }
        });
    }

    return arreglo;
}

resultado = addFiltersUp(items, applyName, applyApproved);
console.log(resultado);