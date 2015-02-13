///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var skills = [" Programming", " Digital Signal & Image & Sound Processing", " JavaScript", " Matlab"];
var bio = {
	"Name" : "Andres Arriaga",
	"Role" : "Telecommunication Engineer",
	"contacts" : {
		"mobile" : "+34 628291577 / +49 17681816499", 
		"email"  : "arriaga.andres@hotmail.es",
		"location" : "Mannheim, Germany",
      "github" : "Andres1989"
	},
	"PictureURL" : "images/yo2.jpg",
   "Welcomemessage" : "I am a proactive person, full of initiative, very motivated and I eager to learn (in my opinion LIFE is a continuous learning process). I have international experience so I can work with teams all over the world and cultures. I am passionate about Embedded Systems and Digital Signal and Image processing like the best method to give tech solutions to the world.",
	// "Welcomemessage" : "No matter the goal, but the path to reach it",
	"Skills" : skills
}
bio.display = function () {
//function displayBio(bio_data){

   var formattedRole = HTMLheaderRole.replace("%data%",bio.Role); 
   $("#header").prepend(formattedRole);
   var formattedName = HTMLheaderName.replace("%data%",bio.Name);
   $("#header").prepend(formattedName);

   var formattedPic= HTMLbioPic.replace("%data%",bio.PictureURL); 
   var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.Welcomemessage);
   $("#header").append(formattedPic + formattedWelcome); 

   var formattedMobil = HTMLmobile.replace("%data%",bio.contacts.mobile)
   $("#topContacts").append(formattedMobil); 
   $("#footerContacts").append(formattedMobil);
   var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email)
   $("#topContacts").append(formattedEmail); 
   $("#footerContacts").append(formattedEmail);
   var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github)
   $("#topContacts").append(formattedGithub); 
   $("#footerContacts").append(formattedGithub);
   var formattedLocationBio = HTMLlocation.replace("%data%",bio.contacts.location)
   $("#topContacts").append(formattedLocationBio); 
   $("#footerContacts").append(formattedLocationBio);

   if (bio.Skills.length > 0) {
        $("#header").append(HTMLskillsStart);   
        var formattedSkill = HTMLskills.replace("%data%",bio.Skills[0])
        $("#skills").append(formattedSkill);  
        var formattedSkill = HTMLskills.replace("%data%",bio.Skills[1])
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%",bio.Skills[2])
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%",bio.Skills[3])
        $("#skills").append(formattedSkill);   
      }
}

bio.display();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Education
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var educations= {
	"onlineCourses":[
   {
   		"title" : "JavaScript Syntax // JavaScript Basics",
   		"school" :  "Udacity",
   		"dates" : "February 2015",
   		"url" : "https://www.udacity.com",
         "URL1" : "https://www.udacity.com/course/ud804"
   	}
   	],
   "Courses":[
      {
         "Name" : "Computing accountancy course ", 
         "dates" : "October 2005"
      },
      {
         "Name" : "7th International summer school on Aggregations Operators (AGOP)",
         "dates" : "16-20 July 2013"
      }
      ],

   "Master":[
   		{
   			"title" : "Master of Science in Information Technology",
   			"University" : "Mannheim Hochschule",
            "location" : "Mannheim, Germany",
   			"dates" : "March 20014 to Present" ,
            "major" : "Ms. Yolanda Mateos",
   			"URL" : "http://www.inftech.hs-mannheim.de/en/prospective-students/master.html",
            "degree" : "currently underway"
   		}
   	],
   "University":[
   		{
  			   "title" : "Bachelor Thesis in Telecommunication Systems Engineering.",
   			"University" : "Karlsruhe Institute of Technology",
            "location" : "Karlsruhe, Germany",
   			"dates" : "Jun 2012 to May 2013" ,
   			"URL" : "http://goo.gl/ziaqn",
            "major" : "Dr. Harsha U.B. & Prof. Dr. rer. Nat Wilheim Stork",
            "degree" : "1.7"
   		},
   		{
  			   "title" : "Bachelor in Telecommunication Systems Engineering",
   			"University" : "Public University of Pamplona",
            "location" : "Pamplona, Spain",
   			"dates" : "Sept 2009 to Jun 2012" ,
   			"URL" : "http://www.unavarra.es",
            "major" : "Mr. Antonio López Martín",
            "degree" : "6.8 von 10"
   		}
      ],

   "Schools" : [
   		{
   			"name" : "Colegio jesuitas pamplona",
   			"location" : "Pamplona, Spain",
   			"Degree" : "Selectividad",
            "major" : "No idea",
   			"dates" : "- to 2009"
   		},
   		{
   			"name" : "Villiers School",
   			"location" : "Limerick, Ireland",
   			"title" : "4º year – Obligatory secondary education",
   			"dates" : "Sept  2004 to July 2005",
            "degree" : "Pass",
            "major" : "Mr. Alan Hardi",
            "URL" : "http://www.villiers-school.com/"
   		}
      ]
}

educations.display = function (){
   // We put the Master
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", educations.Master[0].title);
          formattedName = formattedName.replace("#", educations.Master[0].URL);
      $(".education-entry:last").append(formattedName); 
      var formattedDegree = HTMLschoolDegree.replace("%data%",educations.Master[0].degree);
      $(".education-entry:last").append(formattedDegree); 
      var formattedDates = HTMLschoolDates.replace("%data%",educations.Master[0].dates);
      $(".education-entry:last").append(formattedDates); 
      var formattedLocation = HTMLschoolLocation.replace("%data%",educations.Master[0].location);
      $(".education-entry:last").append(formattedLocation); 
      var formattedMajor = HTMLschoolMajor.replace("%data%",educations.Master[0].major);
      $(".education-entry:last").append(formattedMajor);

   // We put the University
      for (uni in educations.University){
         $("#education").append(HTMLschoolStart);
         var formattedName = HTMLschoolName.replace("%data%", educations.University[uni].title);
             formattedName = formattedName.replace("#", educations.University[uni].URL);
         $(".education-entry:last").append(formattedName); 
         var formattedDegree = HTMLschoolDegree.replace("%data%",educations.University[uni].degree);
         $(".education-entry:last").append(formattedDegree); 
         var formattedDates = HTMLschoolDates.replace("%data%",educations.University[uni].dates);
         $(".education-entry:last").append(formattedDates); 
         var formattedLocation = HTMLschoolLocation.replace("%data%",educations.University[uni].location);
         $(".education-entry:last").append(formattedLocation);
         var formattedMajor = HTMLschoolMajor.replace("%data%",educations.University[uni].major);
         $(".education-entry:last").append(formattedMajor); 
      }

   // We put the Irish School
      $("#education").append(HTMLschoolStart);
         var formattedName = HTMLschoolName.replace("%data%", educations.Schools[1].title);
              formattedName = formattedName.replace("#", educations.Schools[1].URL);
         $(".education-entry:last").append(formattedName); 
         var formattedDegree = HTMLschoolDegree.replace("%data%",educations.Schools[1].degree);
         $(".education-entry:last").append(formattedDegree); 
         var formattedDates = HTMLschoolDates.replace("%data%",educations.Schools[1].dates);
         $(".education-entry:last").append(formattedDates); 
         var formattedLocation = HTMLschoolLocation.replace("%data%",educations.Schools[1].location);
         $(".education-entry:last").append(formattedLocation); 
         var formattedMajor = HTMLschoolMajor.replace("%data%",educations.Schools[1].major);
         $(".education-entry:last").append(formattedMajor); 

            // Cursos online
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", educations.onlineCourses[0].title);
          formattedTitle = formattedTitle.replace("#", educations.onlineCourses[0].URL1);
      $(".education-entry:last").append(formattedTitle);
      var formattedSchool = HTMLonlineSchool.replace("%data%", educations.onlineCourses[0].school);
      $(".education-entry:last").append(formattedSchool);
      var formattedDates = HTMLonlineDates.replace("%data%", educations.onlineCourses[0].dates);
      $(".education-entry:last").append(formattedDates); 
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
}

educations.display();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Work
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Work ={
	"RGIS":[
		{
         "Employer" : "RGIS Inventur Spezialisten Gmbh", 
         "Title" : "Inventurmitarbeiter",
         "Dates" : "15/10/2013 -31/01/2014",
         "Location" : "Walzbachtal – Germany",
         "Description" : "Carry inventories of stores.",
         "URL" : "http://www.rgisinv.com/de_de/"
		}
	],
	"Eroski":[
		{
         "Employer" : "EROSKI S.COOP", 
         "Title" : "Cashier",
         "Dates" : "3/09/2007 – 18/09/2007, 29/06/2006 – 31/07/2006 ,1/06/2005 – 18/08/2005",
         "Location" : "Pamplona, Spain",
         "URL" : "http://www.consumer.es/",
         "Description" : "Charges to customers in checkbox, customer attention and help, Stock shelves, and mark prices on shelves and items"
		}
	],
	"Easons":[
		{
         "Employer" : "Easons Limerick", 
         "Title" : "Cashier",
         "Dates" : "1/03/2005 – 18/03/2005",
         "Location" : "Limerick – Ireland",
         "URL" : "http://www.easons.com/",
         "Description" : "Charges to customers in checkbox, customer attention and help, Stock shelves, and mark prices on shelves and items"
		}
	]
}

   Work.display = function displayWork(){
   
   for (job in Work){
      if (job === "display"){
          //NOTHING TO DO  
      } else {
       $("#workExperience").append(HTMLworkStart); 
       var formattedEmployer = HTMLworkEmployer.replace("%data%",Work[job][0].Employer);
           formattedEmployer = formattedEmployer.replace("#",Work[job][0].URL);
       var formattedTitle = HTMLworkTitle.replace("%data%",Work[job][0].Title);
       var formattedEmployerTitle = formattedEmployer + formattedTitle;
       $(".work-entry:last").append(formattedEmployerTitle); 

       var formattedDate = HTMLworkDates.replace("%data%",Work[job][0].Dates);
       $(".work-entry:last").append(formattedDate);

       var formattedLocation = HTMLworkLocation.replace("%data%",Work[job][0].Location);
       $(".work-entry:last").append(formattedLocation);

       var formattedDescription = HTMLworkDescription.replace("%data%",Work[job][0].Description);
       $(".work-entry:last").append(formattedDescription);

       
    }
   }
 }

 Work.display();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Projects
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Projects = {
   "Bachelor":[
         {
            "Title" : "Development of hashing algorithm for physical uncloneable function verifications.",
            "Dates" : "10/2012 – 4/2013",
            "Description": "This work is carried out to supplement the verification of PUF developed in HandyProve project. In this work, effort is directed to find algorithms that can extract information from an image or a 2D pattern and represent the same as 1D vector. The idea is to store these vectors in a searchable database which can be used for authentication. Therefore the feature extraction and representation algorithm must be deterministic in nature and resilient to fair amount of noise. The images other patterns that are to be processed are currently restrictive in nature. Currently the feature extraction is done using wavelet transform and the extracted features are compared using fingerprint style algorithms. It’s been noted that Gabor transform can be used effectively on uncorrelated images to arrive at a code which has distinguishable distance from nearest neighbours.",
            "Image" : ["images/image1.jpg", "images/image2.jpg"],
            "URL" : "http://goo.gl/ziaqn"
         }
   ]
}

Projects.display = function (data_pro) {
for (pro in Projects.Bachelor){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",Projects.Bachelor[pro].Title);
        formattedTitle = formattedTitle.replace("#",Projects.Bachelor[pro].URL); 
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",Projects.Bachelor[pro].Dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",Projects.Bachelor[pro].Description);
    $(".project-entry:last").append(formattedDescription);

    if (Projects.Bachelor[pro].Image.length > 0){
      for (imagenes in Projects.Bachelor[pro].Image){
           var formattedImage = HTMLprojectImage.replace("%data%",Projects.Bachelor[pro].Image[imagenes]);
            $(".project-entry:last").append(formattedImage);
          }
      }
  } 
}

Projects.display(Projects.Bachelor);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
