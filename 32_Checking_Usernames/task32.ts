//      task32
//    Checking userNames   

let  current_users: string[] = ["ShaZia", "MohSin", "ManaHeel","AliShba", "Ayesha"];

let new_user: string[] = ["Hamzah", "ShaZia", "Azhar", "Jameel", "MohSin"];

new_user.forEach(newUsername => {
   let lowerCase: string = newUsername.toLowerCase();
   if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
      console.log(`The username ${newUsername} is not available. please write a diffrent username`);

   }
   else{
      console.log(`The user name ${newUsername} is available`);
   }
})