document.getElementById('btn-doante-1').addEventListener('click', function(){

    const donationNoakhali = parseFloat(document.getElementById('donation-amount-noakhali').value)
    const totalForNoakhali = parseFloat(document.getElementById('noakhali-total').innerText)
    const BalanceTop = parseFloat(document.getElementById('balance-top').innerText)

    if(donationNoakhali <= 0 || isNaN(donationNoakhali)){
        alert('Please enter a valid amount..')
        return
    }

    const newAmount = donationNoakhali + totalForNoakhali
    const newBalance = BalanceTop - donationNoakhali

    if(BalanceTop < donationNoakhali){
        alert("Insufficient Balance...")
        return
    }

    document.getElementById('noakhali-total').innerText = newAmount
    document.getElementById('donation-amount-noakhali').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_1.showModal()
    
    const historyItem = document.createElement('div')
    historyItem.innerHTML = `
    <div class="border border-[#1111111A] rounded-lg p-6 mb-3">
        <p class="font-bold mb-3">${donationNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p class="text-[#111111B3]">Date: ${new Date()}</p>
    </div>
    `
    const historyContainer = document.getElementById('history-page')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

})


document.getElementById('btn-doante-2').addEventListener('click', function(){
    const donationFeni = parseFloat(document.getElementById('donation-amount-feni').value)
    const totalForFeni = parseFloat(document.getElementById('Feni-total').innerText)
    const BalanceTop = parseFloat(document.getElementById('balance-top').innerText)


    if(donationFeni <= 0 || isNaN(donationFeni)){
        alert('Please enter a valid amount..')
        return
    }

    const newAmount = donationFeni + totalForFeni
    const newBalance = BalanceTop - donationFeni

    if(BalanceTop < donationFeni){
        alert("Insufficient Balance...")
        return
    }

    document.getElementById('Feni-total').innerText = newAmount
    document.getElementById('donation-amount-feni').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_2.showModal()

    const historyItem = document.createElement('div')
    historyItem.innerHTML = `
    <div class="border border-[#1111111A] rounded-lg p-6 mb-3">
        <p class="font-bold mb-3">${donationFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="text-[#111111B3]">Date: ${new Date()}</p>
    </div>
    `
    const historyContainer = document.getElementById('history-page')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})


document.getElementById('btn-doante-3').addEventListener('click', function(){
    const donationQuota = parseFloat(document.getElementById('donation-amount-quota').value)
    const totalForQuota = parseFloat(document.getElementById('quota-injured-donation-total').innerText)
    const BalanceTop = parseFloat(document.getElementById('balance-top').innerText)

    if(donationQuota <= 0 || isNaN(donationQuota)){
        alert('Please enter a valid amount..')
        return
    }


    const newAmount = donationQuota + totalForQuota
    const newBalance = BalanceTop - donationQuota

    if(BalanceTop < donationQuota){
        alert("Insufficient Balance...")
        return
    }

    document.getElementById('quota-injured-donation-total').innerText = newAmount
    document.getElementById('donation-amount-quota').value = ''
    document.getElementById('balance-top').innerText = newBalance
    my_modal_3.showModal()

    const historyItem = document.createElement('div')
    historyItem.innerHTML = `
    <div class="border border-[#1111111A] rounded-lg p-6 mb-3">
        <p class="font-bold mb-3">${donationQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-[#111111B3]">Date: ${new Date()}</p>
    </div>
    `
    const historyContainer = document.getElementById('history-page')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

document.getElementById('history-tab').addEventListener('click', function(){

    const historyTab = document.getElementById('history-tab')
    historyTab.classList.add('bg-[#B4F461]', 'hover:bg-[#a5e651]')
    historyTab.classList.remove('border', 'border-[#1111114D]', 'text-[#111111B3]')

    const donationTab = document.getElementById('donation-tab')

    donationTab.classList.remove('bg-[#B4F461]', 'hover:bg-[#a5e651]', 'text-[rgb(17,17,17)]')
    donationTab.classList.add('text-[#111111B3]','border', 'border-[#1111114D]','hover:bg-[#5452524d]')
    
   const DonationPage = document.getElementById('donation-page')
   DonationPage.classList.add('hidden')

   const historyPage = document.getElementById('history-page')
   historyPage.classList.remove('hidden')

    
})

document.getElementById('donation-tab').addEventListener('click', function(){

    const donationTab = document.getElementById('donation-tab')
    const historyTab = document.getElementById('history-tab')     

   
    donationTab.classList.add('bg-[#B4F461]', 'hover:bg-[#a5e651]')
    donationTab.classList.remove('border', 'border-[#1111114D]', 'text-[#111111B3]')

    historyTab.classList.add('border', 'border-[#1111114D]', 'text-[#111111B3]')
    historyTab.classList.remove('bg-[#B4F461]', 'hover:bg-[#a5e651]')
    

    const DonationPage = document.getElementById('donation-page')
    DonationPage.classList.remove('hidden')

    const historyPage = document.getElementById('history-page')
    historyPage.classList.add('hidden')

    
    
})
 