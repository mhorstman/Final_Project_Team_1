# GW Bootcamp Final Project - Team 1
GitHub repository for GW Data Visualization and Analytics Bootcamp final project

## Overview *("X" Role)*
The purpose of the project is to dig deep into the residential real estate market in selected regions around Los Angeles, CA., to analyze the patterns and characteristics of property sales. The result of our analysis is a machine learning model that can predict the likelihood of a successful sale of a specific property. <br />  

We have noticed the lack of implementation of data in the process of home sales for salespersons, which is a prodigal overlook in this big data era. Consequently, much time and energy are wasted through unsuccessful attempts to sell a property. The salesperson in the industry nowadays still relies on phone calls and emails to seek potential deals. We figured that there is room for improvement and hope that our model could significantly facilitate the efficiency of the sales process in the industry.<br />    

The question that we hope to answer with the data we have is how a salesperson can use the features of a property to predict his/her rate of success of making a sale, features such as overall size, price, age, number of rooms, with or without a fireplace, etc. We are looking to achieve at least 80% accuracy with our model with the data available.<br /> 

### Resources
- **Input:**
- **Software/Tools:** Python, Jupyter Notebook
- **Output:**

## Project Details
### Repository *("Square" Role)*
Repository set up in GitHub and access provided to all Team 1 resources (Carlos Jennings, Koiyan Mawolo Jr., Mike Horstman, and Tianshi Xie). Each of the project areas (database, machine learning and dashboard/presentation) will has a separate branch to work from which will be merged into main through the GitHub pull request functionality. 

#### Communications Protocols
Primary team communication will be done using the "group-1" channel on Slack. Meetins will be set up regularly over Zoom for team collaboration and checkpoints.

### Database *("Circle" Role)*
*ENTER SEGMENT 1 DETAILS HERE: TBD to fill-in*

### Machine Learning *("Triangle" Role)*
For each neigborhood we read in two files - the total neighborhood csv file, and the recent sales csv file. After adding a new column to the sales file, titled 'Did it sell?', which will later become our Target column, we merge our two dataframes, which both share a column called 'Parcel'. 

Once the two files are merged we drop some columns that we don't need and convert all of our columns that have binary values like 'yes' and 'no' to '1' and '0'. Then we encode all of our columns that have categorical data. At this stage we are now ready to begin our machine learning. 

For our machine learning, we'll be trying to correctly predict the houses that sold, so a simple supervised machine learning model will do. 

First, we assign our target column 'Did it sell?' to the variable 'y' and assign everything else to the variable 'x'. We then split our data into training and testing sets, scale our data, fit our model to our scaled data, instantiate our ML model, make predictions, and evaluate their accuracy. 

### Dashboard/Presentation 
*No dashboard info needed to segment 1*

## Results


## Summary
