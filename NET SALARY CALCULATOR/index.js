let basicSalary = Number(basicSalary>=5999 && basicSalary>=100000)

if(basicSalary<=5999){
    return basicSalary-150
}
else if(basicSalary>=6000 && basicSalary<=7999){
    return basicSalary-300
}
else if(basicSalary>=8000 && basicSalary<=11999){
    return basicSalary-400
}
else if(basicSalary>=12000 && basicSalary<=14999){
    return basicSalary-500
}