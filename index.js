const inquirer=require('inquirer');
inquirer
  .prompt([
    {   type: 'list',
        name:"employee_opration",
        message:"select your choices",
        choices:[ 'view all departments',
         'view all roles', 
         'view all employees', 
         'add department',
         'add role', 
         'add employee', 
         'update employee role']
    },
   
  ])
  .then(answers => {
    console.info('Answer:', answers.employee_opration);
  });