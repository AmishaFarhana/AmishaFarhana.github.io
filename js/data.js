// ============================================================
// Amisha Farhana Shaik — Portfolio Data
// ============================================================

const FEATURED_PROJECTS = [
  {
    title: "VitaNova AI — Waste Classification",
    category: "ml",
    techStack: ["JavaScript", "TensorFlow.js", "Teachable Machine", "HTML5", "CSS3", "Perplexity AI API"],
    description: "AI waste classification system achieving 95% accuracy in identifying hazardous materials in conflict zones. Presented at hackathon, securing recognition for addressing humanitarian needs.",
    githubUrl: "https://github.com/AmishaFarhana",
    highlight: "95% accuracy"
  },
  {
    title: "S&P 500 Price Forecasting",
    category: "ml",
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "Random Forest"],
    description: "ML pipeline to forecast next-day S&P 500 movements using engineered predictors and a custom backtesting framework, informing market-risk and investment decisions.",
    githubUrl: "https://github.com/AmishaFarhana/Improving-Predictive-Models-Using-Feature-Selection-Regularization-Smarket-Case",
    highlight: "Backtesting framework"
  },
  {
    title: "Flight Delay Prediction",
    category: "ml",
    techStack: ["Python", "Pandas", "scikit-learn", "Logistic Regression", "Random Forest", "XGBoost"],
    description: "End-to-end ML pipeline using 5.8M U.S. flight records to classify delays with logistic regression, random forests, and boosted trees for operational insight.",
    githubUrl: "https://github.com/AmishaFarhana/Flight-Delay-Prediction-ML-Project",
    highlight: "5.8M records"
  },
  {
    title: "End-to-End Big Data Pipeline",
    category: "data-eng",
    techStack: ["Hadoop", "HDFS", "Python MRJob", "Apache Pig", "Apache Hive", "SQL"],
    description: "Distributed data pipeline processing NOAA weather data using Python MapReduce, Pig aggregation, and Hive SQL — demonstrating multi-layer Hadoop ecosystem integration.",
    githubUrl: "https://github.com/AmishaFarhana/End-to-End-Big-Data-Pipeline-MRJob-Pig-Hive-on-Hadoop",
    highlight: "Full Hadoop stack"
  },
  {
    title: "Credit Risk Default Prediction",
    category: "ml",
    techStack: ["Python", "Logistic Regression", "ROC/AUC", "Confusion Matrix", "Feature Engineering"],
    description: "Credit default prediction model with a custom Credit History Index (CHI) scoring system translating outputs into operational lending decisions and portfolio risk management.",
    githubUrl: "https://github.com/AmishaFarhana/credit-risk-default-prediction-modeling",
    highlight: "Custom CHI scoring"
  },
  {
    title: "Fraud Detection in Financial Transactions",
    category: "ml",
    techStack: ["Python", "Pandas", "scikit-learn", "Isolation Forest", "t-SNE"],
    description: "ML-based fraud detection pipeline using Isolation Forest and t-SNE dimensionality reduction to identify anomalous transactions with 95% accuracy, reducing false positives.",
    githubUrl: "https://github.com/AmishaFarhana/Fraud-Detection-in-Financial-Transactions",
    highlight: "95% accuracy"
  },
  {
    title: "Germany Electricity Demand Forecasting",
    category: "timeseries",
    techStack: ["R", "forecast", "SARIMA", "Holt-Winters", "ggplot2"],
    description: "Built and benchmarked weekly electricity demand models on 2006–2017 German data, reducing RMSE from 416 to 238 with a hybrid regression + residual MA framework achieving 1.8% MAPE.",
    githubUrl: "https://github.com/AmishaFarhana/Germany-Weekly-Electricity-Forecasting",
    highlight: "1.8% MAPE"
  },
  {
    title: "Rocky Mountain High-Speed Rail Study",
    category: "optimization",
    techStack: ["MS Project", "Excel", "WBS/RACI", "Cost Baseline", "PowerPoint"],
    description: "$1.25M Colorado rail feasibility study — owned scoping and change control, developing WBS/RACI matrix and integrated 293-day schedule that absorbed scope pivots saving $18K.",
    githubUrl: "https://github.com/AmishaFarhana/High-Speed-Rail-Project-Management-Study",
    highlight: "$1.25M study"
  }
];

const ALL_PROJECTS = {
  "ML / AI & Classification": [
    {
      title: "Industrial Alarm Chattering Prediction",
      techStack: ["Python", "scikit-learn", "kNN", "Random Forest", "Gradient Boosting"],
      description: "ML models to classify alarm chattering events in industrial evaporator systems, optimizing anomaly detection while minimizing overlooked critical failures.",
      githubUrl: "https://github.com/AmishaFarhana/Industrial-Alarm-Chattering-Prediction-Risk-Classification"
    },
    {
      title: "Insurance Claims Risk Analytics (Allianz)",
      techStack: ["Python", "Pandas", "Clustering", "Regression", "Feature Engineering"],
      description: "Claims risk analytics framework to segment customers and identify drivers of long-duration payouts using clustering and supervised modeling.",
      githubUrl: "https://github.com/AmishaFarhana/Insurance-claims-risk-segmentation-allianz"
    },
    {
      title: "Decision Intelligence & Classification Models",
      techStack: ["Decision Trees", "kNN", "Cross-Validation", "Model Comparison"],
      description: "Built and compared classification models across banking, e-commerce, and industrial datasets using decision trees and kNN.",
      githubUrl: "https://github.com/AmishaFarhana/decision-intelligence-classification-models"
    },
    {
      title: "Taiwan Credit Card Crisis Analysis",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      description: "In-depth exploratory analysis of credit card usage trends during the 2005 Taiwanese credit card crisis, identifying patterns driving default risk.",
      githubUrl: "https://github.com/AmishaFarhana/Taiwan-Credit-Card-Crisis-Analysis"
    },
    {
      title: "Automated Credit Card Approval Predictor",
      techStack: ["Python", "ML", "Logistic Regression", "Decision Trees"],
      description: "Automated credit card approval prediction model using supervised learning and feature engineering to evaluate applicant eligibility.",
      githubUrl: "https://github.com/AmishaFarhana/Automated-Credit-Card-Approval-Predictor"
    },
    {
      title: "Conjoint & Sentiment Analytics",
      techStack: ["Python", "NLP", "Conjoint Analysis", "Marketing Analytics"],
      description: "Applied conjoint analysis and sentiment analytics to quantify customer preference structures and emotional responses for product optimization.",
      githubUrl: "https://github.com/AmishaFarhana/Conjoint-and-Sentiment-Analytics-Projects"
    }
  ],
  "Time Series & Forecasting": [
    {
      title: "Walmart Revenue ARIMA Forecasting",
      techStack: ["R", "forecast", "ARIMA", "Auto ARIMA", "ACF Diagnostics"],
      description: "Improved baseline regression forecasts by detecting residual autocorrelation and implementing AR(1) residual correction for quarterly revenue prediction.",
      githubUrl: "https://github.com/AmishaFarhana/Walmart-Revenue-ARIMA-Forecasting"
    },
    {
      title: "U.S. Food Production Forecasting",
      techStack: ["R", "forecast", "Holt-Winters", "Moving Average", "Seasonal Dummies"],
      description: "Compared multiple time-series models on monthly U.S. food production data (1997–2017) with a two-level forecasting framework.",
      githubUrl: "https://github.com/AmishaFarhana/US-Food-Production-Time-Series-Forecasting"
    },
    {
      title: "Walmart Revenue Regression Forecasting",
      techStack: ["R", "forecast", "tslm()", "Time Series Decomposition", "RMSE"],
      description: "Time-series regression models using Walmart's quarterly revenue data (2005–2024) validated for 2025–2026 planning.",
      githubUrl: "https://github.com/AmishaFarhana/Walmart-Revenue-Regression-Forecasting"
    },
    {
      title: "Magazine Sales & Game-Day Demand",
      techStack: ["Python", "Pandas", "Seaborn", "scikit-learn", "GLS", "HAC"],
      description: "Demand forecasting for game-day magazine sales using opponent strength, promotions, weather, and seasonal indicators.",
      githubUrl: "https://github.com/AmishaFarhana/Magazine-Sales-Game-Day-Demand-Forecasting-Case-Study"
    },
    {
      title: "Fantasy Hockey Playoff Probability",
      techStack: ["Python", "Monte Carlo Simulation", "Bootstrap Resampling"],
      description: "Monte Carlo simulation and bootstrap resampling to estimate playoff qualification probabilities under competitive scenarios.",
      githubUrl: "https://github.com/AmishaFarhana/Fantasy-Hockey-Playoff-Probability-Simulation"
    }
  ],
  "Optimization & Operations Research": [
    {
      title: "Looms of Ladakh Production Optimization",
      techStack: ["Linear Programming", "Python", "Production Planning"],
      description: "Resource-constrained optimization models to maximize profit for artisan cooperatives under raw material, labor, and SKU constraints.",
      githubUrl: "https://github.com/AmishaFarhana/Looms-of-Ladakh-Production-Optimization"
    },
    {
      title: "Network & Allocation Optimization",
      techStack: ["Linear Programming", "Sensitivity Analysis", "Python"],
      description: "Optimization models for warehouse network design, space allocation, and budget-constrained selection to minimize cost.",
      githubUrl: "https://github.com/AmishaFarhana/Network-and-Allocation-Optimization-Models"
    },
    {
      title: "Freight & Inventory Optimization",
      techStack: ["Linear Programming", "Multi-Objective Optimization", "PuLP"],
      description: "Freight allocation and inventory optimization for Caterpillar distribution center, balancing cost, transit time, and on-time performance.",
      githubUrl: "https://github.com/AmishaFarhana/Freight-and-Inventory-Optimization-Models"
    },
    {
      title: "Rougir Cosmetics Production Optimization",
      techStack: ["Python", "Linear Programming", "Business Case"],
      description: "Production optimization models to maximize profit and resource utilization for a cosmetics manufacturer across product lines.",
      githubUrl: "https://github.com/AmishaFarhana/Rougir-Cosmetics-Production-Optimization"
    },
    {
      title: "Burrito Truck Optimization (Gurobi)",
      techStack: ["Python", "Gurobi", "Mixed-Integer Programming", "Scenario Analysis"],
      description: "Mixed-integer optimization for optimal food truck placement and operations under demand, capacity, and staffing constraints.",
      githubUrl: "https://github.com/AmishaFarhana/Burrito-Truck-Optimization-Gurobi"
    }
  ],
  "Data Engineering & Cloud BI": [
    {
      title: "Data Engineering & Cloud BI Portfolio",
      techStack: ["AWS Redshift", "Google BigQuery", "Talend", "SQL", "Tableau"],
      description: "Dimensional data warehouse schemas and ETL pipelines in Talend transforming raw transactional data into structured analytical tables.",
      githubUrl: "https://github.com/AmishaFarhana/data-engineering-cloud-bi-assignments"
    },
    {
      title: "Data Engineering & BI Labs",
      techStack: ["Talend", "Tableau", "Dimensional Modeling", "SCD Type 1/2/6"],
      description: "Star schema data models with slowly changing dimensions and accumulating fact tables for enterprise-grade reporting.",
      githubUrl: "https://github.com/AmishaFarhana/data-engineering-business-intelligence-labs"
    },
    {
      title: "EDA & Feature Engineering",
      techStack: ["Python", "Pandas", "NumPy", "Data Cleaning"],
      description: "End-to-end exploratory data analysis on automotive and retail datasets, identifying pricing drivers and feature interactions.",
      githubUrl: "https://github.com/AmishaFarhana/exploratory-data-analysis-feature-engineering"
    }
  ],
  "Marketing & Segmentation Analytics": [
    {
      title: "Dutch Bros Marketing Analytics",
      techStack: ["Python", "Clustering", "Discriminant Analysis", "Segment Profiling"],
      description: "Linked marketing exposure data to transaction-level sales to measure campaign lift and identify high-value customer cohorts.",
      githubUrl: "https://github.com/AmishaFarhana/Dutch-Bros-Marketing-Analytics-Segmentation"
    },
    {
      title: "Market Segmentation & Brand Positioning",
      techStack: ["Python/R", "Hierarchical Clustering", "Perceptual Mapping"],
      description: "Customer segmentation and perceptual mapping to identify key market clusters and positioning strategies for automotive brands.",
      githubUrl: "https://github.com/AmishaFarhana/Market-Segmentation-and-Brand-Positioning-Analytics"
    },
    {
      title: "Retail Wine Market Strategy Analytics",
      techStack: ["Pandas", "Consumer Segmentation", "Pricing Strategy"],
      description: "Retail market analysis segmenting customers by purchasing behavior, identifying millennial demand shifts toward organic wines.",
      githubUrl: "https://github.com/AmishaFarhana/retail-wine-market-strategy-analytics"
    },
    {
      title: "Advertising Effectiveness & Interaction Modeling",
      techStack: ["Python", "OLS Regression", "Interaction Terms", "Data Augmentation"],
      description: "Engineered higher-order interaction features and evaluated regression specifications to identify synergistic media effects driving sales.",
      githubUrl: "https://github.com/AmishaFarhana/Advertising-Effectiveness-Case-Study-Interaction-Modeling-Model-Selection-Data-Augmentation"
    }
  ],
  "Dashboards & Visualization": [
    {
      title: "Employee Attrition Analysis Dashboard",
      techStack: ["Power BI", "HR Analytics", "Data Visualization"],
      description: "Interactive Power BI dashboard analyzing employee attrition across age, salary, education, gender, and department for 1K+ records.",
      githubUrl: "https://github.com/AmishaFarhana/Employee-Attrition-Analysis-Dashboard"
    },
    {
      title: "Financial Health Dashboard",
      techStack: ["Power BI", "Microsoft Excel", "Financial Ratios"],
      description: "Interactive dashboard tracking key financial ratios, profitability metrics, and liquidity indicators for companies.",
      githubUrl: null
    },
    {
      title: "Kanban Digital Dashboard for Student Clubs",
      techStack: ["Notion", "Excel", "Agile", "Kanban", "Gantt Charts"],
      description: "Kanban-style digital dashboard to streamline project tracking and scheduling for student organizations.",
      githubUrl: null
    }
  ]
};

const LINKEDIN_POSTS = [
   {
    title: "VP of Business Analytics Club",
    date: "2024",
    snippet: "Honored to serve as Vice President of the Business Analytics Club at CSUEB. Looking forward to building bridges between students and industry through meaningful events and initiatives.",
    likes: 83,
    comments: 11,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/vp.png"
  },
  {
    title: "CSUEB's First Datathon 1.0",
    date: "2024",
    snippet: "From assembling industry mentors and keynote speakers to coordinating logistics across departments, it was both chaotic and deeply rewarding. Watching students collaborate and push through sleepless nights reminded me why community-driven learning matters.",
    likes: 89,
    comments: 12,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/datathon.png"
  },
  {
    title: "Library Ambassador",
    date: "2024",
    snippet: "Developed an AI waste classification system achieving 95% accuracy in identifying hazardous materials. Presented our innovative solution at the hackathon, securing recognition for addressing humanitarian needs.",
    likes: 76,
    comments: 8,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/lib.png",
  },
  {
    title: "ALPHA Tech Summit at Microsoft",
    date: "2024",
    snippet: "An incredible experience at Microsoft's campus — connecting with tech leaders and seeing the future of AI and cloud computing up close. Grateful for the exposure and the networks built.",
    likes: 65,
    comments: 6,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/alpfa.png"
  },
  {
    title: "Lawrence Livermore National Lab Visit",
    date: "2024",
    snippet: "Visiting one of the nation's premier research institutions — learning about cutting-edge computational science and national security applications of data science.",
    likes: 54,
    comments: 5,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/lawrence.png"
  },
  {
    title: "Tesla Factory Visit",
    date: "2024",
    snippet: "Industry exposure at its finest — witnessing the intersection of manufacturing innovation, data-driven operations, and sustainability at Tesla's facility.",
    likes: 72,
    comments: 9,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/tesla.png"
  },
  {
    title: "Orientation Leader",
    date: "2025",
    snippet: "Insurance Claims Risk Segmentation for Allianz — my first deep dive into clustering and supervised modeling for real-world insurance analytics. #WhatIBuiltInMSBA",
    likes: 48,
    comments: 7,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/ol.png"
  },
  {
    title: "Pioneer's Perspective - Episode 2",
    date: "2024",
    snippet: "Empowering conversations about leadership, resilience, and breaking barriers. Proud to be part of a community that uplifts women in business and technology.",
    likes: 61,
    comments: 4,
    linkedinUrl: "https://www.linkedin.com/in/amishafarhanashaik/recent-activity/all/",
    image: "assets/pp.png"
  }
];

const EXPERIENCE = [
  {
    role: "BS in Computer Science and Engineering",
    company: "Loyola Academy",
    period: "Previous",
    description: "Undergraduate studies in C++, Java, Information Science, Computer Architecture and more.",
    type: "education"
  },
  {
    role: "Analyst Intern",
    company: "Bhanzu",
    period: "Previous",
    description: "One of the first few hires in a start up founded by Neelakantha Bhanu, The world's fastest human calculator.",
    type: "work"
  },
   {
    role: "President",
    company: "EmpowerHer Club, Loyola Academy",
    period: "Previous",
    description: "Designed lessons for young girls in local government schools, promoting education and confidence-building.",
    type: "leadership"
  },
  {
    role: "KYC/AML Analyst",
    company: "JPMorgan Chase",
    period: "Previous",
    description: "Financial compliance and risk analysis in one of the world's largest financial institutions.",
    type: "work"
  },
  {
    role: "MS in Business Analytics",
    company: "Cal State University, East Bay",
    period: "Current",
    description: "Graduate studies in data science, machine learning, optimization, and business intelligence.",
    type: "education"
  },
  {
    role: "VP & Events Officer",
    company: "Business Analytics Club, CSUEB",
    period: "Current",
    description: "Organized CSUEB's first Datathon, Pioneers' Perspectives speaker series, workshops, and industry visits.",
    type: "leadership"
  },
  {
    role: "Senator",
    company: "College of Business & Economics, CSUEB",
    period: "Current",
    description: "Representing students across departments, advocating for academic and career-readiness improvements.",
    type: "leadership"
  },
  {
    role: "Student Assistant",
    company: "Dean's Office (CEAS), CSUEB",
    period: "Current",
    description: "Coordinated events, managed communications, and supported administrative operations.",
    type: "campus"
  },
  {
    role: "Library Student Ambassador",
    company: "CSUEB Library",
    period: "Current",
    description: "Research support, outreach, and engagement initiatives to improve access to academic resources.",
    type: "campus"
  },
  {
    role: "Orientation Leader",
    company: "CSUEB",
    period: "Previous",
    description: "Led orientation programs and campus tours for incoming students, fostering early engagement.",
    type: "campus"
  },
  {
    role: "DISC Student Assistant",
    company: "Diversity & Inclusion Student Center, CSUEB",
    period: "Previous",
    description: "Supported diversity and inclusion initiatives, coordinating programs for culturally responsive engagement.",
    type: "campus"
  }
];

const SKILLS = {
  "Languages": ["Python", "R", "SQL", "JavaScript"],
  "ML & AI": ["scikit-learn", "TensorFlow.js", "XGBoost", "Random Forest", "Logistic Regression"],
  "Data": ["Pandas", "NumPy", "Hadoop", "Hive", "Pig", "HDFS"],
  "Cloud & BI": ["AWS Redshift", "Google BigQuery", "Talend", "Tableau", "Power BI"],
  "Optimization": ["Gurobi", "Linear Programming", "Monte Carlo", "PuLP/SciPy"],
  "Tools": ["MS Project", "Excel", "Notion", "Git", "Jupyter"]
};

const LEADERSHIP_HIGHLIGHTS = [
  {
    role: "VP & Events Officer — Business Analytics Club",
    narrative: "Serving as Vice President and Events Officer for the Business Analytics Club has been one of the most defining experiences of my graduate journey. I helped lead and organize initiatives that connected students directly with industry professionals. We hosted 'Pioneers\\' Perspectives,' organized CSUEB's first-ever Datathon — a 36-hour hackathon centered around sustainability — and ran workshops like 'Excel with Tableau' and industry visits including HCL Technologies.",
    impact: "What I learned most wasn't just event management — it was stakeholder alignment, collaboration, resilience under pressure, and how powerful structured exposure to industry can be."
  },
  {
    role: "Senator — College of Business & Economics",
    narrative: "As Senator, I represented undergraduate and graduate students across departments, serving as a bridge between students, faculty, and the Dean's Office. This role required really listening to student concerns around course availability, academic resources, and career readiness.",
    impact: "It gave me a deeper appreciation for governance, policy discussions, and how institutional decisions affect real student outcomes."
  },
  {
    role: "President — EmpowerHer Club",
    narrative: "Before graduate school, I served as President of EmpowerHer Club, where we designed and delivered engaging lessons for young girls in local government-run schools. We organized outreach initiatives, built partnerships with local organizations, and promoted education and confidence-building.",
    impact: "This role shaped my early leadership identity. It taught me ownership, initiative, and how powerful structured community engagement can be."
  }
];

const QUOTES = [
  "Analytics and technical skills matter — but so do empathy, representation, and community building.",
  "What I learned most wasn't just event management — it was stakeholder alignment, collaboration, resilience under pressure.",
  "Growth is the point.",
  "Watching students collaborate, push through sleepless nights, and present real solutions reminded me why community-driven learning matters."
];
