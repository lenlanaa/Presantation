function bodymass(w,h){
    var bmi = w/(h*h);

    if (bmi < 18.5) {
        console.log("UnderWeight");
    }
    else if(bmi >= 18.5 && bmi < 25){
        console.log("Healthy");
    }
    else if(bmi >= 25 && bmi < 35){
        console.log("Overweight");
    }
    else{
        console.log("obesity");
    }
}
bodymass(70,1.7);