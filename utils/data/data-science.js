const designing_good_charts = [
    {
        term: "choosing chart",
        prompt: "What chart to se when you see different location based data with frequenccies?",
        example: "Heatmap, choropleth map"
    },
    {
        term: "bar charts",
        prompt: "What to consider when having a bar chart?",
        example: "If it has long names, consider having that on the y axis, sort the numeric values, make sure they have enough space",
        attachment: "./img/2023-03-22-19-54-00.png"
    },
    {
        term: "line charts",
        prompt: "What to consider when having a line chart?",
        example: "They are good for showing trends, but not good for showing the exact values. If you want to show the exact values, consider using a scatter plot, using it implies a varying relationship between the x values",
    }
    ,
    {
        term: "colors",
        prompt: "What to consider when using colors?",
        example: "You can use ColorBrewer to choose the colors, let the intensity make a change.\n\
        You can highlight the story you want to tell.",
    },
    {
        term: "scatter plot",
        prompt: "When can You use Scatter Plots?",
        example: "You can use them when you want to see clustering."
    }
]

const sql = [
    {}
]


const statistics = [
    {
        term: "Difference descriptive and inferential statistics",
        prompt: "What is the difference between descriptive and inferential statistics?",
        example: "Descriptive statistics is about describing the data, inferential statistics is about making conclusions (generalization) about the data.",
        descriptive: "Techniques used in descriptive statistics include: measures of central tendency (mean, median, and mode), measures of dispersion (standard deviation, variance, percentiles, and quartiles), and measures of association (correlation, regression, and covariance).\n\
        Techniques used in inferential statistics include: hypothesis testing (t-test, chi-square, and ANOVA), and regression analysis.",
    },
    {
        term: "accuracy",
        prompt: "Use example of accuracy",
        description: "Accuracy is the relationship between the measuremen and the actual truth",
        
    }

]


module.export = { designing_good_charts, sql }