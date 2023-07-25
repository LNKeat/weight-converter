document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbs-input').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'

    let lbs = e.target.value
    document.getElementById('grams-output').innerHTML = lbs / 0.0022046
    document.getElementById('ounces-output').innerHTML = lbs * 16
    document.getElementById('kilograms-output').innerHTML = lbs / 2.2046

}) 