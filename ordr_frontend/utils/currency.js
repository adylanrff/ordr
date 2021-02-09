export default function convertIntToIdrString(number) {
    var formatter = Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    })
    var formattedBalance = formatter.format(number)
    return formattedBalance        
}