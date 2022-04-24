
//Student Array Data Structure

let studentArray = [
    ['Arafat', '7', '24', '4', 'male', 'banani','1500'],
    ['Tamim', '5', '15', '3', 'male', 'romna', '1000'],
    ['Tisa', '7', '9', '2', 'female', 'romna', '500'],
    ['Abir', '9', '20', '4', 'male', 'Mirpur', '1000'],
    ['Jalil', '2', '10', '4', 'male', 'uttora', '1000'],
    ['Simu', '3', '16', '3', 'female', 'Mirpur', '700'],
    ['Nisat', '6', '50', '4', 'male', 'Mirpur', '1000'],
    ['Nusrat', '1', '20', '2', 'female', 'gulsan', '500'],
    ['Toma', '3', '60', '2', 'female', 'Mirpur', '500'],
    ['Karim', '5', '25', '3', 'male', 'uttora', '700'],
    ['Sakil', '4', '27', '2', 'male', 'syamoly', '500'],
    ['Selim', '2', '10', '4', 'male', 'banani', '900'],
    ['Nahid', '3', '15', '3', 'male', 'badda', '700'],
    ['Safi', '10', '17', '4', 'female', 'banani', '500'],
    ['Kalam', '9', '50', '2', 'male', 'syamoly', '500'],
    ['Barik', '3', '45', '3', 'male', 'malibag', '1200'],
    ['Mizan', '2', '20', '4', 'male', 'syamoly', '600'],
    ['Sakila', '7', '12', '2', 'female', 'gulsan', '900'],
    ['Safiq', '8', '35', '4', 'male', 'syamoly', '1000'],
    ['Rarik', '9', '17', '2', 'male', 'gulsan', '500'],
    ['Abul', '3', '37', '3', 'male', 'malibag', '900'],
    ['Moyna', '2', '17', '2', 'female', 'syamoly', '500'],
];

//Assignments - Total Admnission fees:


let totalFees = 0;

studentArray.sort().forEach( (data, index) => {

    console.log (`${index+1}. Name : ${data[0]}
Admission fees: ${data[6]}`)

    totalFees+= +data[6];

} )

console.log (`
---------------------------------------
Total Admission Fees: ${totalFees}
`);


// Assignments - All Female Students:

studentArray.sort().forEach( (data,i)=>{

    if (data[4]==='female'){
        console.log (`${i+1}. ${data[0]} 
    Female Student`)
    }
       
    } )


//Assignments - Find class wise student:

studentArray.sort().forEach( (data, index) => {

    if (data[3]==='2') {
        console.log (`${index+1}. ${data[0]}   Class ${data[3]}`)
    } else if (data[3]==='3') {
        console.log (`${index+1}. ${data[0]}   Class ${data[3]}`)
    } else if (data[3]==='4') {
        console.log (`${index+1}. ${data[0]}   Class ${data[3]}`)
    }
} )

//Assignments - Location wise student:

studentArray.sort().map( (data, index) => {
    if (data[5]==='banani') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='romna') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='mirpur') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='uttora') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='gulsan') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='syamoly') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='badda') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } else if (data[5]==='malibag') {
        console.log (`${index+1}. ${data[0]}
    Location: ${data[5]} `)
    } 
} )


//Assignments - find student between 10 - 25 age:

studentArray.sort().map( (data, index) => {
    
    if (data[2] >= 10 && data[2] <= 25) {
        console.log (`${index+1}. ${data[0]}--- ${data[2]} yrs old `)
    }
} )