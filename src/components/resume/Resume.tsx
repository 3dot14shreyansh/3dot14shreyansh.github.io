import {useState} from 'react';
import Card from "../Card";
import './resume.css';


const Resume = () => {

   const [skill_summary, setSkill] = useState([
    {
      dates: " ",
      title: "Quants",
      subtitle: " ",
      description: "Covariance, Pearson Correlation Coefficient, QQ Plot, Confidence Interval, Hypothesis Testing, Chisquare Test, Anova Test, Conditional Probability, Bayes Theorem, Distributions(Poission, Uniform, Binomial, Bernaulli), Vectors, Matrices, Matrix Multiplication, Dot Product, Eigen Vector and Eigen Values"
    },
    {
      dates: " ",
      title: "Libraries",
      subtitle: " ",
      description: "Sklearn, NLTK, Numpy, Pandas, Matplotlib, Seaborn, OpenCV, Flask, Keras, Tensorflow."
    },
    {
      dates: " ",
      title: "Data analysis",
      subtitle: " ",
      description: "Handling missing data(numerical, categorical, indicators), standarization, normalization, feature encoding(ordinal encoding, one hot encoding, feature hashing), feature transformation(Log transformation, Box Cox transformation, Yeo Johnson transformation), feature selection(Chi-squared Feature Selection, Backward Feature Elimination, Dropping features using Pearson correlation coefficient), Handling multicollinearity."
    },
    {
      dates: " ",
      title: "Machine Learning",
      subtitle: " ",
      description: "DBSCAN, Heirarchical Clustering, KMeans Clustering, Xgboost, Gradient Boosting, Adaboost, Random Forest, Decision Trees, K Nearest Neighbors, Naive Bayes, Support Vector Machines, Logistic Regression, Gradient Descent, Linear Regression, ML metrics(MAE(Mean Absolute Error), MSE(Mean squared Error), RSME(Root Mean Squared Error), R2 Score, Adjusted R2 Score), Regularization(Ridge regression, Lasso regression, ElasticNet regression), Model Tuning(GridSearchCV, RandomSearchCV, Hyperparameter Tuning)"
    },
    {
      dates: " ",
      title: "Deep Learning",
      subtitle: " ",
      description: "Forward propogation (Weight management, Bais structuring, Activation function), Backward propogation (Loss function, Cost function, Optimisers, Weight updation)"
    },
    {
      dates: " ",
      title: "Natural Language Processing",
      subtitle: " ",
      description: "N-gram Language Models, Speech tagging, Sequence labelling, LSTM Recurrent, Syntactic parsing, Semantic Analysis, IE, MT"
    },
  ]);


  const [experience, setExperience] = useState([
    {
      dates: "June 2020 - March 2022",
      title: "Python Developer",
      subtitle: "Constacloud, Korba",
      description: "Built an Automated EDA using statistic summary, Pearson Correlation Cofficients and automated PCA to helpbetter feature selection for modeling. Built prediction ML models to predict incoming customer influx and ticket price around their intrest. Automated end to end data wrangling for annual revenue reporting and analysis."
    },
    {
      dates: "November 2020 - Present",
      title: "Data Science Mentor",
      subtitle: "Freelance",
      description: "Mentoring UG and PG students to understand data analysis for project purposes and taught Data Science for intrested individual who are currently appaering for campus recruitment"
    },
  ]);

  const [educaton, setEducation] = useState([
    {
      dates: "Batch of 2018",
      title: "B.Tech, Mechanical engineering",
      subtitle: "SRM University, Chennai",
      description: "CGPA: 7.8"
    },
    {
      dates: "Batch of 2014",
      title: "Grade XII",
      subtitle: "St. Aloysius Senior Secondary School, Jabalpur",
      description: "CGPA: 7.7"
    },
    {
      dates: "Batch of 2012",
      title: "Grade X",
      subtitle: "St. Aloysius Senior Secondary School, Jabalpur",
      description: "CGPA: 8.0"
    },
  ]);

  


 
  const [achievements, setAchievements] = useState([
      
      {
        dates: "November 2017 - January 2018",
        title: "Royal Enfield, Chennai",
        subtitle:"Internship",
        description: "Worked on the suspension system, where I had to develop a mathematical model. In the very beginning, we had to set the suspension parameters of maximum road comfort. Was resposible to bring a balanced setup which can increase the ride comfort and road-holding capacity."
      },
      {
        dates: "June 2017",
        title: "Team leader : Vimaan",
        subtitle: "SAE Aeromodelling 2017",
        description: "Designed and built wooden RC aircraft from scratch with payload capacity of 5kg and airborne capabality of 20 minutes. Ranked 8th in the competition."
      },
      {
        dates: "Junuary 2017",
        title: "Team member : Trispeed",
        subtitle: "SAE Efficycle 2017",
        description: "Built a IC powered tri-wheel vehicle for 8km of endurance race. This vehicle can accomodate a driver and a passenger. "
      },
      {
        dates: "December 2015 - February 2016",
        title: "Sona Koyo Steering, Gurugran",
        subtitle: "Internship",
        description: "Developed Dashboard wings for Maruti Suzuki Ignis, Maruti Suzuki Ertiga & Maruti Suzuki Swift Dezire."
      },
    ]);
  


    

    return (
      <div className="col-grid">
        
         <div className="col">
          <h1>Skill Summary</h1>
          <Card cardInfo={skill_summary}/>
        </div>

        <div className="col">
          <h1>Experience</h1>
          <Card cardInfo={experience}/>
        </div>

        <div className="col">
          <h1>Education</h1>
          <Card cardInfo={educaton}/>
        </div>

        <div className="col">
          <h1>Contributions</h1>
          <Card cardInfo={achievements}/>
        </div>

        
        
      </div>

    )
}

export default Resume