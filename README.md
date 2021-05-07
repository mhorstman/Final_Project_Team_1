# GW Bootcamp Final Project - Team 1
GitHub repository for GW Data Visualization and Analytics Bootcamp final project

## Overview *("X" Role)*
The purpose of the project is to dig deep into the residential real estate market in selected regions around Los Angeles, CA., to analyze the patterns and characteristics of property sales. The result of our analysis is a machine learning model that can predict the likelihood of a successful sale of a specific property. <br />  

We secured data from several Los Angeles neighborhoods as they looked in 2017. Then, we look at the sales in those neighborhoods in 2018, 2019, 2020, and Q1 2021. Since the source data contains a lot of information about property i.e size, date of purchase, loan amount, tax amount etc, we believe that with the right machine learning model, it will be possible to tell the sellers from the non-sellers. 

We have noticed the lack of implementation of data in the process of home sales for salespersons, which is a prodigal overlook in this big data era. Consequently, much time and energy are wasted through unsuccessful attempts to sell a property. The salesperson in the industry nowadays still relies on phone calls and emails to seek potential deals. We figured that there is room for improvement and hope that our model could significantly facilitate the efficiency of the sales process in the industry.<br />    

The question that we hope to answer with the data we have is how a salesperson can use the features of a property to predict his/her rate of success of making a sale, features such as overall size, price, age, number of rooms, with or without a fireplace, etc. We are looking to achieve at least 80% accuracy with our model with the data available.<br /> 

### Description of data exploration and processing
SVM was not particularly helpful in classifying the data, which we believe was caused by the large number of categorical variables in the dataset. because of the number of categorical variables. The SVM results in a model with high accuracy score but low precision.
The large number of categorical variables means that it is difficult to visually observe group distinctions using logistic regression or SVM.<br />

One of the major challenges for our model is to properly divide the data into training and testing sets. The nature of real estates means that their sales frequency and success rate of sales are much lower than typical commodities. Therefore, there is a disproportional amount of data in the “not sold” bracket, causing a high accuracy but low probability in the predicted results.<br />

Hence, we will be using decision trees and random forests to exploit the binomial variables. 


### Resources
- **Input:** Total_Sales.csv, Total_Neighborhood.csv
- **Software/Tools:** Python, Jupyter Notebook, Tableau
- **Output:**

## Project Details
### Repository *("Square" Role)*
Repository set up in GitHub and access provided to all Team 1 resources (Carlos Jennings, Koiyan Mawolo Jr., Mike Horstman, and Tianshi Xie). Each of the project areas (database, machine learning and dashboard/presentation) will has a separate branch to work from which will be merged into main through the GitHub pull request functionality. 

#### Communications Protocols
Primary team communication will be done using the "group-1" channel on Slack. Meetins will be set up regularly over Zoom for team collaboration and checkpoints.

### Database *("Circle" Role)*
Create an AWS RDS database for easy connectivity amongst group members. 
Setup Postgres using PG Admin and connect with AWS using Endpoint for connectivity.
Create two tables "Sales and Total" with foreign and primary keys under the real-estate database. Import the data form cleaned real-estate CSV data.
Changed the rule of the CIDR/IP - Inbound Type to make the database visible to PG Admin

### Machine Learning *("Triangle" Role)*
For each neigborhood we read in two files - the total neighborhood csv file, and the recent sales csv file. After adding a new column to the sales file, titled 'Did it sell?', which will later become our Target column, we merge our two dataframes, which both share a column called 'Parcel'. 

Once the two files are merged we drop some columns that we don't need and convert all of our columns that have binary values like 'yes' and 'no' to '1' and '0'. Then we encode all of our columns that have categorical data. At this stage we are now ready to begin our machine learning. 

For our machine learning, we'll be trying to correctly predict the houses that sold, so a simple supervised machine learning model will do. 

First, we assign our target column 'Did it sell?' to the variable 'y' and assign everything else to the variable 'x'. We then split our data into training and testing sets, scale our data, fit our model to our scaled data, instantiate our ML model, make predictions, and evaluate their accuracy. 

We run through 16 supervised machine learning models, and evaluate their performance based on three metrics. 

- [x] Accuracy Score 
- [x] Balanced Accuracy Score
- [x] F1 i.e 'Harmonic Mean' Score

The best model turns out to be a simple Logistic Regression with a few important modifications. We separate out Single Family Homes from Condos, we scale the data, and we perform a Principal Components Analysis which reduces the features to 3 columns. This is then applied to all seven neighborhoods and both property categories (Single Family Home and Condo). The resulting predictions are in the 'Output Files' folder.

One of the principal challenges for our machine learning model is the nearly indistinguishable nature of sellers vs non-sellers. To illustrate this point, the below are screenshots of running the data through an unsupervised learning model, which groups the properties into 4 clusters. Sales are marked in yellow, non-sales are in blue. 

<img src = "https://github.com/mhorstman/Final_Project_Team_1/blob/main/Clusters_Screenshot.png">

### Dashboard/Presentation 
The dashboard is being developed in Tableau. The dashboard uses the output of the machine learning model to plot the results in an interactive and user-friendly format. The dashboard can be seen at the following link and additional detail on the dashboard elements are discussed in the sections below. 
[Tableau Dashboard](https://public.tableau.com/profile/mike.horstman#!/vizhome/Final_Project_Dashboard_Team1/DashboardTheSellerNextDoor?publish=yes)

#### Dashboard Elements
1. **Neighborhood Map**: The first map shows the boundaries of each of the 7 neighborhoods in Los Angeles that the machine learning model was run on. The color of each of the neighborhoods corresponds to the percentage of sales that the model predicted correctly with the lowest percentage in Hollywood at 56% and the highest percentage in Hollywood Hills at 71%. When clicking on the neighborhood the Sales Predictions in the other parts of the dashboard are filtered accordingly. A screenshot of this element of the dashboard is included below. <br/>
![Neighborhood Map](https://github.com/mhorstman/Final_Project_Team_1/blob/main/Dashboard/images/Neighborhood_Map.png)

2. **Sales Predictions**: The second map shows the results of the machine learning model. Properties that the model predicted correctly are plotted as a green circle, and incorrect predictions are plotted as a red circle. To the right of the map are the interactive elements where the map can be filtered on Prediction Result, Property Type, and Results Detail. The associated sales prediction table shows the number of properties in each Results Detail category. A screenshot of this element of the dashboard is included below. <br/>
![Sales Predictions](https://github.com/mhorstman/Final_Project_Team_1/blob/main/Dashboard/images/Sales_Prediction.png)


## Results


## Summary
