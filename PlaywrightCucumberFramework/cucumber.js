

module.exports = {


default: {


require: [


'step-definitions/**/*.ts',


'hooks/**/*.ts'


],


requireModule: [


'ts-node/register'


],


format: [


'progress',


'html:reports/cucumber-report.html',


'json:reports/cucumber.json'


],


paths: [


'features/**/*.feature'


],


publishQuiet: true


}


}
