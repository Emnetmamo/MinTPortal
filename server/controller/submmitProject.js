import ProjectModel from "../models/projects.js";
       


const submmitProject = async ( req, res)  => {
        let Title = [];

        const projectTitle = req.body.projectTitle;
        const teamMembers = req.body.teamMembers;
        const projectCategory = req.body.projectCategory;
        const description = req.body.description;
        const email1 = req.body.email;
        const institute = req.body.institute;
        const cvPath = req.body.cvFile;
        const proposalPath = req.body.proposalFile;        
        const letterPath = req.body.letter;

       
        
       
        console.log('Project Title:', projectTitle);
        console.log("TeamMember: " + teamMembers);

        // const serverUrl = 'https://research-portal-server-9.onrender.com'; // Replace this with your server URL

        // const cvPaths = req.files['cvFile'][0].path;
        // const cleanFilePathC = cvPaths.replace(/\\/g, '/').split('public/').pop();
        // const cvPath = serverUrl + '/' + cleanFilePathC;
        
        // const proposalPaths = req.files['proposalFile'][0].path;
        // const cleanFilePathP = proposalPaths.replace(/\\/g, '/').split('public/').pop();
        // const proposalPath = serverUrl + '/' + cleanFilePathP;

        // const letterPaths = req.files['letter'][0].path;
        // const cleanFilePathL = letterPaths.replace(/\\/g, '/').split('public/').pop();
        // const letterPath = serverUrl + '/' + cleanFilePathL;

        let team1 = teamMembers.replace('[', '');
        team1 = team1.replace(']', '');
        team1 = team1.replaceAll('"', '');
        
        let teamMembers1 = [];
        for (let i = 0; i < team1.split(',').length; i++) {
          teamMembers1.push(team1.split(',')[i]);
        }
        console.log("TeamMember1: " + teamMembers1);
        // console.log("CV: " + req.files['cvFile'][0].path)
        const nowDate = new Date(Date.now()).toISOString();
        // console.log(cvPath);
        // console.log(proposalPath);
        // await ProjectModel.updateMany( {},{ $set: { email : 'emnetmk@gmail.com'} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { hostInstitution : "Addis Ababa University"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { proposalPath2 : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { presentationPath : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { proposalPath3 : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { grantedDate : nowDate} }, { multi: true });
        //console.log(email1);
        // const data={projectTitle:projectTitle,teamMembers:teamMembers,projectCategory:projectCategory,description:description,cvPath:cvPath,proposalPath:proposalPath}
        Title=await ProjectModel.find({Title:projectTitle});
        if(Title.length>0){
          res.json('titlepresent')

        }else {
          try {
            const project = await ProjectModel.create({
              projectTitle: projectTitle,
              teamMembers: teamMembers1,
              projectCategory: projectCategory,
              description: description,
              cvPath: cvPath,
              proposalPath: proposalPath,
              email: email1,
              status: 1,
              hostInstitution: institute,
              letterPath: letterPath,
              submittedDate: nowDate,
              grantedDate: nowDate,
              proposalPath2: " ",
              presentationPath: " ",
              proposalPath3: " "
            });
        
            res.json('Project is stored in the database: ' + project);
          } catch (error) {
            res.status(500).json('Error during creating project: ' + error);
          }
               
        
      }

    }
     export default submmitProject