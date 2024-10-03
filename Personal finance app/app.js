document.addEventListener('DOMContentLoaded',()=>{
    const addTransactionBtn=document.getElementById('addTransactionBtn');
    const transactionList=document.getElementById('transactionList');
    const totalIncomeEl=document.getElementById('totalIncome');
    const totalExpensesEl=document.getElementById('totalExpenses');
    const balanceEl=document.getElementById('balance');
    
    function displayTransaction(){
        const transactions=JSON.parse(localStorage.getItem('transactions')) || [];
        transactionList.innerHTML='';
        transactions.forEach((transaction,index) => {
            const li= document.createElement('li');

            if (transaction.catagory === 'Income') {
                li.innerHTML=`${transaction.name} - $${transaction.amount.toFixed(2)}
                 (${transaction.catagory})
                 <button class="delete-btn" onclick="deletetransaction(${index})">Delete</button>`;

                li.style.backgroundColor='rgb(77, 103, 250)';
                li.style.color='white';
   
            }else{
                li.innerHTML=`${transaction.name} - $${transaction.amount.toFixed(2)} (${transaction.catagory})
                <button class="delete-btn" onclick="deletetransaction(${index})">Delete</button>`;
                li.style.backgroundColor='gray';
                li.style.color='white';
            }
            transactionList.appendChild(li);

        });
    }

   addTransactionBtn.addEventListener('click', addTransaction);
   function addTransaction(){
    const name=document.getElementById('transactionName').value;
    const amount=parseFloat(document.getElementById('transactionAmount').value
);
const catagory=document.getElementById('transactionCatagory').value;
if (name && ! isNaN(amount)) {
    const transactions=JSON.parse(localStorage.getItem('transactions')) || [];
    const newTransaction={name ,amount, catagory};
    transactions.push(newTransaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));
    displayTransaction();
    updateSummary();

    }
}
function updateSummary(){
    const transactions=JSON.parse(localStorage.getItem('transactions')) || [];
    let totalIcome=0;
    let totalExpenses=0;

    transactions.forEach((transaction)=>{
        if (transaction.catagory === 'Income') {
            totalIcome+=transaction.amount;
        }else{
            totalExpenses +=transaction.amount;
        }
    });
    const balance=totalIcome - totalExpenses;
    totalIncomeEl.textContent=totalIcome.toFixed(2);
    totalExpensesEl.textContent=totalExpenses.toFixed(2);
    balanceEl.textContent=balance.toFixed(2);
}
function deletetransaction(index){
    const transactions=JSON.parse(localStorage.getItem('transactions'));
    const confirmDelete = confirm("Are you sure you want to delete this transaction?");
    if (confirmDelete) {
        transactions.splice(index,1) ;
    localStorage.setItem('transactions',JSON.stringify(transactions));
    displayTransaction();
    updateSummary();
    }
    
}
window.deletetransaction=deletetransaction;
displayTransaction();
updateSummary();
});

