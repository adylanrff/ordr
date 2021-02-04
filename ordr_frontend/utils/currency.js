export default function convertIntToIdrString(number) {
    const formatter = Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    })
    const formattedBalance = formatter.format(number)
    return formattedBalance        
}