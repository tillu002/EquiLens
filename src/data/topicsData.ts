import  ELCL1  from "../images/ELCL1.jpg";
import  ELCL2  from "../images/ELCL2.jpg";
import  ELTI1  from "../images/ELTI1.jpg";
import  ELTI2  from "../images/ELTI2.jpg";
import  ELAW1  from "../images/ELAwareness1.jpg";
import  ELAW2  from "../images/ELAwareness2.jpg";
import  ELDP1  from "../images/ELDP1.jpg";
import  ELDP2  from "../images/ELDP2.jpg";







export interface TopicData {
  title: string;
  content: string;
  image1: string;
  image2: string;
}

export interface SchoolPopulationData {
  title: string;
  content: string;
  tableData: {
    SchoolName: string;
    BoysPercentage: string;
    GirlsPercentage: string;
  }[];
}

export const schoolPopulationData: SchoolPopulationData = {
  title: "School Population Analysis",
  content: "The data shows a clear gender disparity in school enrollment over the years. While both boys and girls enrollment has increased, there remains a persistent gap between male and female students. This analysis helps identify trends and areas requiring intervention to achieve gender equality in education.",
  tableData: [
    { SchoolName: "B.B.ZP.P.G HIGH SCHOOL", BoysPercentage: "35%", GirlsPercentage: "75%",},
    { SchoolName: "Vivekanandha high school", BoysPercentage: "47%", GirlsPercentage: "52%",},
    { SchoolName: "XLNC", BoysPercentage: "64.8%", GirlsPercentage: "33.6%",},
    { SchoolName: "MPPUP", BoysPercentage: "55%", GirlsPercentage: "45%",},
    { SchoolName: "SARASWATHI SUSIMANDIR", BoysPercentage: "47%", GirlsPercentage: "52.8%",},
    { SchoolName: "PRAGATHI CHARITIES", BoysPercentage: "55%", GirlsPercentage: "45%",},
    { SchoolName: "MPT MODEL SCHOOL", BoysPercentage: "47.5%", GirlsPercentage: "52%",},
    { SchoolName: "D.LN.R HIGH SCHOOL", BoysPercentage: "83%", GirlsPercentage: "17%",},
    { SchoolName: "ZILLAPRAJA PARISHITH", BoysPercentage: "51%", GirlsPercentage: "48%",},
  ]
};

export const topicsData: Record<string, TopicData> = {
  "School Population": schoolPopulationData,
  "Dropouts": {
    title: "Student Dropout Analysis",
    content: `During the project, we interacted with the parents of dropout students to understand the reasons
behind their children leaving school. Common issues included financial constraints, lack of
awareness about the importance of education, and cultural factors such as early marriages. In
one instance, it was noted that parental illiteracy played a significant role, with parents
discontinuing their children’s education due to a lack of understanding of its value. These
insights emphasized the need for targeted awareness programs and support to address these
barriers effectively`,
    image1: ELDP1,
    image2: ELDP2
  },
  "Teacher Interactions": {
    title: "Teacher-Student Interaction Patterns",
    content: `We have actively collaborated with teachers to understand and address gender disparities in
education. Through these interactions, we have explored the barriers that may hinder equal
opportunities for students of all genders, such as unconscious biases, societal expectations, and
resource gaps. Together, we have discussed strategies to foster gender-sensitive teaching
practices, promote inclusivity in classrooms, and ensure that every student has access to a
supportive and empowering learning environment. These efforts aim to create a foundation for
equitable academic and personal growth for all learner's.`,
    image1: ELTI1,
    image2: ELTI2
  },
  "Awareness Campaign": {
    title: "Gender Equality Awareness Campaigns",
    content: `We conducted awareness campaigns within the community to emphasize the importance of
education and address gender disparities. These campaigns targeted parents, guardians, and
other community members, highlighting the long-term benefits of education for both boys and
girls. Through discussions, posters, and interactive sessions, we addressed issues such as child
labor, early marriages, and the significance of equal educational opportunities. The campaign
aimed to foster a supportive environment for education and encourage the community to
prioritize schooling for all children.`,
    image1: ELAW1,
    image2: ELAW2
  },
  "Child Labour": {
    title: "Impact of Child Labour on Education",
    content: `As part of the project, we interacted with children engaged in labor to understand their
challenges and encourage them to pursue education. Many of these children were working
due to financial hardships, supporting their families, or due to a lack of awareness about the
long-term benefits of education. Through conversations and awareness activities, we
motivated them by explaining the opportunities education can provide for a brighter future.
We also discussed with their families the importance of schooling and sought to connect them
with resources or initiatives that could support their return to school.`,
    image1: ELCL1,
    image2: ELCL2
  }
};