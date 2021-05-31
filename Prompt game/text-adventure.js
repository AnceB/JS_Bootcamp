let playerName = prompt('Hello adventurer, how should I call you?')
alert('Greetings, ' + playerName + '!')

let willHelp = prompt('Times are difficult, our village is in lack food supplies. Would you help us? (Yes or No)')
let adventurePlan = ''
if (willHelp === 'Yes') {
    alert('Oh, thank you, thank you, ' + playerName + '! Let me tell you what to do next...')
    adventurePlan = prompt('You can help us getting food by Fishing (F), Hunting (H) or Gathering (G). Your choice?')

} else {
    alert('I understand - you are busy. Let me see if I can motivate you...')
    let isMotivated = prompt('10 silver coins, how does that sound? (Yes or No)')
    if (isMotivated === 'Yes') {
        adventurePlan = prompt('You can help us getting food by Fishing (F), Hunting (H) or Gathering (G). Your choice?')
    } else {
        alert('Not even the money could motivate you.')
        let extraMotivation =  prompt('Is there anything else you would want for your help? (Yes or No)')
        if (extraMotivation === 'Yes') {
            let extraReward = prompt('Do you want your weapon enchanted by our village\'s mage? (Yes or No)')
            if (extraReward === 'Yes') {
                adventurePlan = prompt('You can help us getting food by Fishing (F), Hunting (H) or Gathering (G). Your choice?')
            } else {
                alert("The necklace is very powerful...But it is your choice. Good bye. ")
                window.stop();
            }
        } else {
            alert("I'm afraid we have nothing to talk about then. Good luck on your adventures, " + playerName + '.')
            window.stop();
        }
    }
}

if (adventurePlan !== '') {
    let direction = ''
    let weaponChoice = ''

    if (adventurePlan === 'F') {
        direction =  prompt('There are two rivers, to the left and to the right. Where do you choose to go? (L or R)')
        if (direction === 'L') {
            alert('You decided to go to the river that is to the left.')
        } else {
            alert('You decided to go to the river that is to the right.')
        }
    } else if (adventurePlan === 'H') {
        alert('Sunbreeze Woods are home for many wild animals, you need to come prepared...')
        weaponChoice = prompt('Do you want to use a bow or a sword? (B or S)')
        if (weaponChoice === 'S') {
            alert('You pick up a sword made from steel. It is quite heavy.')
        } else {
            alert('The elegant bow handle fits nicely into your hand.')
        }
        let ready = prompt('Are you ready to go hunting? (Yes or No)')
        while (ready !== 'Yes') {
            alert('Take your time...')
            ready = prompt('Are you ready to go now? (Yes or No)')
        }
    
    } else {
        direction = prompt('Do you want to gather plants in Fire Valley or Sand Lagoon? (F or S)')
        if (direction === 'F') {
            alert('You decided to go gather plants in the Fire Valley.')
        } else {
            alert('You decided to go gather plants in the Sand Lagoon.')
        }
    }
}