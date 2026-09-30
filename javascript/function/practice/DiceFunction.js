

function getRandom(){
    let random = Math.floor(Math.random() * 6) + 1;


    /* LOGIC

    Math.random() gives value in ange 0<= number < 1

    for example: 0.8599405577483715
    then multiple this random number by that number which is the maximum number requred
    for examople 6 is the max number then,
    ===> 0.8599405577483715 * 6 =  5.159643346490229 we will get this number then,
    use floor function Math.floor(5.159643346490229) = 5 
    but note that till this the output number range willbe only 1 to 5 but we need 1 to 6,
    so we have to add 1 to get range from 1 to 6.
     */

    console.log(random);
}

getRandom();
getRandom();
getRandom();
getRandom();
getRandom();
getRandom();