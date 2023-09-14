//(QuesNo:11) Find all the topics and tasks which are thought in the month of October??
       db.topics.find().forEach(function(tasks){print("Month::",tasks.month,"task::",tasks.task,"topics::",tasks.topics)})

//(QuesNo:12) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020??
       db.company_drives.find({date:{$gt:"15-oct-2020",$lt:"31-oct-2020"}})

//(QuesNo:13) Find all the company drives and students who are appeared for the placement.??
       db.company_drives.aggregate([{$lookup:{from:"users",localField:"batch",foreignField:"batch",as:"placement-appeared-student"}}])

//(QuesNo:14) Find the number of problems solved by the user in codekata??
       db.users.find().forEach(function(user){print("Student-Name::",user.student_name,"Problems-solved::",user.codekata)})
   
//(QuesNo:15) Find all the mentors with who has the mentee's count more than 15?? 
       db.mentors.find({mentees_count:{$gt:15}})

//(QuesNo:16) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020??
       db.users.find({$or:[{task:"Incompleted"},{attendance:"absent"}]})
