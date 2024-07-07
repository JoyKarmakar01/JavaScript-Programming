def create_blank_files(filenames):
    for filename in filenames:
        with open(filename, "w") as f:
            pass
filenames = [
            "1.Introduction.js","2.BasicSyntaxandDataTypes.js",
            "3.VariablesandScope.js", "4.InputandOutput.js", 
            "5.BasicOperators.js", "6.ControlFlowStatements.js", 
            "7.Loops.js", "8.Functions.js", "9.ErrorandExceptionHandling.js", 
            "10.BasicDataStructures.js"
            ]
create_blank_files(filenames)
