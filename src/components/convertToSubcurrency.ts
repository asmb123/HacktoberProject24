function convertToSubcurrency(amount:number,fector=100){
    return Math.round(amount*fector);
}
export default convertToSubcurrency;