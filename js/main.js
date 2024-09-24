// Common Function start

function getInputFieldValueById(id){
    return parseFloat(document.getElementById(id).value)
}

function getTextFieldValueById(id){
    return parseFloat(document.getElementById(id).innerText)
}

function historyTabAttribute(id){
    document.getElementById(id).classList.add('bg-[#B4F461]', 'hover:bg-[#a5e651]')
    document.getElementById(id).classList.remove('border', 'border-[#1111114D]', 'text-[#111111B3]')
}

function donationTabAttribute(id){
    document.getElementById(id).classList.remove('bg-[#B4F461]', 'hover:bg-[#a5e651]', 'text-[rgb(17,17,17)]')
    document.getElementById(id).classList.add('text-[#111111B3]','border', 'border-[#1111114D]','hover:bg-[#5452524d]')
}

function historyContainer(donationArea, title){
    const historyItem = document.createElement('div')
    historyItem.innerHTML = `
    <div class="border border-[#1111111A] rounded-lg p-6 mb-3">
        <p class="font-bold mb-3">${donationArea} ${title}</p>
        <p class="text-[#111111B3]">Date: ${new Date()}</p>
    </div>
    `
    const historyContainer = document.getElementById('history-page')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
}
// common function end


document.getElementById('btn-doante-1').addEventListener('click', function(){

    const donationNoakhali = getInputFieldValueById('donation-amount-noakhali')
    const totalForNoakhali = getTextFieldValueById('noakhali-total')
    const BalanceTop = getTextFieldValueById('balance-top')

    if(donationNoakhali <= 0 || isNaN(donationNoakhali)){
        alert('Please enter a valid amount..')
        return
    }
    
    const newAmount = donationNoakhali + totalForNoakhali
    const newBalance = BalanceTop - donationNoakhali

    if(BalanceTop < donationNoakhali){
        alert("Attempt Failed due to Insufficient Balance.")
        return
    }

    document.getElementById('noakhali-total').innerText = newAmount
    document.getElementById('donation-amount-noakhali').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_1.showModal()
    
    historyContainer(donationNoakhali, 'Taka is Donated for Flood at Noakhali, Bangladesh')
})


document.getElementById('btn-doante-2').addEventListener('click', function(){

    const donationFeni = getInputFieldValueById('donation-amount-feni')
    const totalForFeni = getTextFieldValueById('Feni-total')
    const BalanceTop = getTextFieldValueById('balance-top')

    if(donationFeni <= 0 || isNaN(donationFeni)){
        alert('Please enter a valid amount..')
        return
    }

    const newAmount = donationFeni + totalForFeni
    const newBalance = BalanceTop - donationFeni

    if(BalanceTop < donationFeni){
        alert("Attempt Failed due to Insufficient Balance.")
        return
    }

    document.getElementById('Feni-total').innerText = newAmount
    document.getElementById('donation-amount-feni').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_2.showModal()

    historyContainer(donationFeni, 'Taka is Donated for Flood Relief in Feni,Bangladesh')
})


document.getElementById('btn-doante-3').addEventListener('click', function(){
    const donationQuota = getInputFieldValueById('donation-amount-quota')
    const totalForQuota = getTextFieldValueById('quota-injured-donation-total')
    const BalanceTop = getTextFieldValueById('balance-top')

    if(donationQuota <= 0 || isNaN(donationQuota)){
        alert('Please enter a valid amount..')
        return
    }

    const newAmount = donationQuota + totalForQuota
    const newBalance = BalanceTop - donationQuota

    if(BalanceTop < donationQuota){
        alert("Attempt Failed due to Insufficient Balance.")
        return
    }

    document.getElementById('quota-injured-donation-total').innerText = newAmount
    document.getElementById('donation-amount-quota').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_3.showModal()

    historyContainer(donationQuota, 'Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh')
})


document.getElementById('history-tab').addEventListener('click', function(){

    historyTabAttribute('history-tab')
    
    donationTabAttribute('donation-tab')    
    
   const DonationPage = document.getElementById('donation-page')
   DonationPage.classList.add('hidden')

   const historyPage = document.getElementById('history-page')
   historyPage.classList.remove('hidden')
    
})

document.getElementById('donation-tab').addEventListener('click', function(){
   
    historyTabAttribute('donation-tab')
    donationTabAttribute('history-tab')       

    const DonationPage = document.getElementById('donation-page')
    DonationPage.classList.remove('hidden')

    const historyPage = document.getElementById('history-page')
    historyPage.classList.add('hidden')    
})

