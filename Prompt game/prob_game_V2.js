function game () {
    const player_name = prompt('So you think you have a little problem? What is your name?');
    alert(`Ok, lets look at your problem, ${player_name}!`);
    
    const dialog_list = create_dialog_list(player_name);
  
    show_dialog('start');
  
    function show_dialog(dialog_id) {
      console.log('dialog_id is %s', dialog_id);
      // there is no dialog to show
      if (!dialog_id)
        return;
  
      // run the dialog function, get the next_id
      const next_id = dialog_list[dialog_id].dialog();
      // if the next_id is in dialog_list, show it
      if (next_id && dialog_list[dialog_id][next_id.toLowerCase()])
          return show_dialog(dialog_list[dialog_id][next_id.toLowerCase()]);
      
      // else try to show the default one
      show_dialog(dialog_list[dialog_id].default);
    };
  
    function create_dialog_list(player_name) {
      const dialog_list = {
        start: {
          dialog: () => prompt('Let me see! Does the damn thing work? Yay or Nay???'),
          default: 'oh_snap',
          yay: 'do_not_touch',
        },
        do_not_touch: {
          dialog: () =>  alert(`So DO NOT TOUCH IT, ${player_name}, you silly goose!`),
        },
        oh_snap: {
          dialog: () => {
            alert('Ohhhh, snap! Too bad!');
            return prompt(`Did you break it ${player_name}? (Yes or No)`);
          },
          default: 'in_trouble',
          yes: 'who_know',
        },
        in_trouble: {
          dialog: () => prompt(`Will you get in trouble for this ${player_name}? (Yes on No)`),
          default: 'no_trouble',
          yes: 'trouble',
        },
        no_trouble: {
          dialog: () => alert(`Well then, you do NOT HAVE A PROBLEM, ${player_name}, you silly goose! Just toss it!`),
        },
        trouble: {
          dialog: () => { 
            alert ('Hahaha! That serves you rigth for messing with it!');
            return prompt(`Can you blame someone else ${player_name}? (Yes on No)`);
          },
          default: 'think_again_blame',
          yes: 'problem_solved_blamed',
        },
        who_know: {
          dialog: () => {
            alert('What was going trough your mind, are you crazy??');
            return prompt('Does anyone esle know you broke it (Yes or No)');
          },
          default: 'hide_it',
          yes: 'put_blame',
        },
        hide_it: {
          dialog: () => alert(`Just hide it ${player_name}, and you have no PROBLEM!`),
        },
        put_blame: {
          dialog: () => {
            alert ('Ouch, you are in deep with this, I do not know if I can help you!');
            return prompt(`Can you blame someone else ${player_name}? (Yes on No)`);
          },
          default: 'think_again_blame',
          yes: 'problem_solved_blamed',
        },
        problem_solved_blamed: {
          dialog: () => alert(`Well then, you do NOT HAVE A PROBLEM, ${player_name} you silly goose! HIDE it!`),
        },
        think_again_blame: {
          dialog: () => {
            alert ('Think again!');
            return prompt(`Can you blame someone else ${player_name}? (Yes on Yes)`);
          },
          default: 'i_cant_help',
          yes: 'thats_what_i_thought',
        },
        thats_what_i_thought: {
          dialog: () => alert(`That is what I thought, ${player_name}! We solved your problem!`),
        },
        i_cant_help: {
          dialog: () => alert(`I can not help you with this attitude ${player_name} you are on your own!`),
        }
      };
  
      return dialog_list;
    };
  };

  game()