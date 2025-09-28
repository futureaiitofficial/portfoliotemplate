'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaArrowLeft, FaGithub, FaLinkedin, FaExternalLinkAlt, FaCalendarAlt, 
  FaUsers, FaClock, FaCheckCircle, FaLightbulb, FaCog, FaRocket,
  FaServer, FaDatabase, FaChartBar, FaBrain, FaAws
} from 'react-icons/fa'
import Footer from '../../components/Footer'
import styles from './ProjectPage.module.css'

// Simple header component for project pages
function ProjectHeader() {
  return (
    <header className={styles.projectHeader}>
      <div className={styles.projectHeaderContent}>
        {/* Logo/Brand */}
        <Link href="/" className={styles.projectLogo}>
          <div className={styles.logoIcon}>L</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Lahari</span>
            <span className={styles.logoTitle}>Data Scientist & Developer</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className={styles.projectHeaderNav}>
          <Link href="/#projects" className={styles.backToProjects}>
            <FaArrowLeft />
            Back to Projects
          </Link>
          
          {/* Social Links */}
          <div className={styles.projectSocialLinks}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectSocialLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectSocialLink}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

// Extended project data with case study details
const projectsData: { [key: string]: any } = {
  'travel-connect': {
    id: 'travel-connect',
    title: 'Travel Connect',
    category: 'Full Stack',
    description: 'A social travel platform where users can connect with fellow travelers, share trip plans, and join collaborative travel experiences. Deployed using Docker on AWS Linux instance.',
    image: '/projects/Connectingworld.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Express.js', 'Socket.io', 'JWT', 'Linux'],
    github: 'https://github.com/yourusername/travel-connect',
    demo: 'https://travel-connect-demo.vercel.app',
    duration: '4 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Developed a comprehensive social travel platform that combines the social features of Instagram with travel-focused functionality, enabling travelers to connect, plan, and share their adventures.',
    problem: 'Solo travelers and travel enthusiasts lacked a dedicated platform to connect with like-minded individuals, share trip plans, and collaborate on travel experiences in real-time.',
    solution: 'Created a full-stack social travel application with real-time chat, trip planning tools, itinerary sharing, and Instagram-like social features tailored for the travel community.',
    challenges: [
      'Implementing real-time chat functionality for multiple trip groups simultaneously',
      'Designing an intuitive trip planning interface with collaborative features',
      'Managing complex user relationships and privacy settings for trip sharing',
      'Optimizing image uploads and storage for travel photos and itineraries',
      'Creating a responsive design that works seamlessly across mobile and desktop'
    ],
    features: [
      'User profiles with travel preferences and history',
      'Trip creation and planning with detailed itineraries',
      'Real-time chat within trip groups',
      'Social feed for sharing travel photos and updates',
      'Trip discovery and join requests system',
      'Interactive maps integration for trip visualization',
      'Travel buddy matching based on preferences',
      'Photo sharing with location tagging',
      'Review and rating system for destinations',
      'Push notifications for trip updates and messages'
    ],
    techDetails: {
      'Frontend': 'Built with Angular 15 using TypeScript for robust component architecture. Implemented responsive design with Angular Material and custom CSS for travel-specific UI components.',
      'Backend': 'RESTful API developed with Node.js and Express.js, featuring JWT authentication, role-based access control, and real-time communication using Socket.io.',
      'Database': 'MongoDB with Mongoose ODM for flexible document storage, optimized for travel data, user relationships, and chat message history.',
      'Real-time Features': 'Socket.io integration for instant messaging, live trip updates, and real-time notifications across the platform.',
      'File Management': 'Cloudinary integration for optimized image storage and processing, with automatic compression and responsive image delivery.'
    },
    screenshots: [
      {
        title: 'Social Feed & Discovery',
        description: 'Instagram-like social feed where users can share travel photos, stories, and discover new destinations through community posts.',
        label: 'Home Feed',
        image: '/screenshots/socialfeedanddiscover.png'
      },
      {
        title: 'Trip Planning Interface',
        description: 'Collaborative trip planning dashboard with interactive maps, itinerary builder, and real-time collaboration features.',
        label: 'Trip Planner',
        image: '/screenshots/tripplanninginterface.png'
      },
      {
        title: 'Real-time Chat',
        description: 'In-app messaging system for travellers with file sharing, location sharing, and travel coordination features.',
        label: 'Group Chat',
        image: '/screenshots/messaginginterface.png'
      },
      {
        title: 'Travel Profile & Matching',
        description: 'User profiles showcasing travel preferences, past trips, and compatibility matching for finding travel companions.',
        label: 'User Profile',
        image: '/screenshots/travelprofile.png'
      }
    ]
  },
  'ai-chatbot': {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support Bot',
    category: 'Artificial Intelligence',
    description: 'Intelligent chatbot using NLP and machine learning to provide automated customer support.',
    image: '/projects/chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ai-chatbot',
    demo: 'https://chatbot-demo.herokuapp.com',
    duration: '2 months',
    team: 'Team of 3',
    status: 'completed',
    overview: 'Developed an intelligent chatbot capable of understanding customer queries and providing accurate responses using natural language processing and machine learning.',
    problem: 'Customer support teams were overwhelmed with repetitive queries, leading to longer response times and decreased customer satisfaction.',
    solution: 'Created an AI-powered chatbot that can handle 80% of common customer queries automatically, with seamless handoff to human agents when needed.',
    challenges: [
      'Training the model to understand various ways customers phrase the same question',
      'Implementing context awareness for multi-turn conversations',
      'Ensuring the bot provides accurate and helpful responses',
      'Creating a smooth handoff mechanism to human agents'
    ],
    features: [
      'Natural language understanding',
      'Intent classification and entity extraction',
      'Context-aware conversations',
      'Multi-language support',
      'Sentiment analysis',
      'Human agent handoff',
      'Analytics dashboard',
      'Integration with existing CRM systems'
    ],
    techDetails: {
      'NLP Model': 'Custom BERT-based model fine-tuned on customer service data with 92% accuracy in intent classification.',
      'Backend': 'Flask API with PostgreSQL for conversation history and analytics.',
      'Training': 'Used transfer learning with pre-trained language models and custom dataset of 10K+ customer interactions.',
      'Deployment': 'Containerized with Docker and deployed on Heroku with auto-scaling capabilities.'
    },
    screenshots: [
      {
        title: 'Chat Interface',
        description: 'Clean and intuitive chat interface with typing indicators, message history, and seamless conversation flow.',
        label: 'Chat UI',
        image: '/screenshots/chatbot-interface.jpg'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Comprehensive analytics showing conversation metrics, user satisfaction scores, and bot performance insights.',
        label: 'Analytics',
        image: '/screenshots/chatbot-analytics.jpg'
      },
      {
        title: 'Admin Configuration',
        description: 'Administrative panel for managing bot responses, training data, and customizing conversation flows.',
        label: 'Admin Panel',
        image: '/screenshots/chatbot-admin.jpg'
      }
    ]
  },
  'stock-predictor': {
    id: 'stock-predictor',
    title: 'Stock Price Prediction Model',
    category: 'Machine Learning',
    description: 'LSTM neural network model for predicting stock prices with 85% accuracy using historical data.',
    image: '/projects/stock-predictor.jpg',
    technologies: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn', 'Streamlit', 'Alpha Vantage API'],
    github: 'https://github.com/yourusername/stock-predictor',
    demo: 'https://stock-predictor.streamlit.app',
    duration: '1.5 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Built a machine learning model using LSTM neural networks to predict stock prices based on historical data and technical indicators.',
    problem: 'Investors needed a reliable tool to analyze stock trends and make informed investment decisions based on historical patterns.',
    solution: 'Developed a deep learning model that analyzes historical stock data, technical indicators, and market sentiment to predict future price movements.',
    challenges: [
      'Handling non-stationary time series data',
      'Feature engineering for technical indicators',
      'Avoiding overfitting with limited historical data',
      'Dealing with market volatility and external factors'
    ],
    features: [
      'LSTM neural network for time series prediction',
      'Technical indicator calculation',
      'Multiple stock symbol support',
      'Interactive visualization dashboard',
      'Model performance metrics',
      'Backtesting capabilities',
      'Real-time data integration',
      'Risk assessment tools'
    ],
    techDetails: {
      'Model Architecture': 'Multi-layer LSTM with dropout regularization and attention mechanism for better long-term dependencies.',
      'Data Processing': 'Comprehensive preprocessing pipeline with normalization, feature scaling, and technical indicator calculation.',
      'Training': 'Used 5 years of historical data with walk-forward validation to prevent look-ahead bias.',
      'Deployment': 'Streamlit web application with real-time data feeds from Alpha Vantage API.'
    },
    screenshots: [
      {
        title: 'Prediction Dashboard',
        description: 'Interactive dashboard displaying stock price predictions with confidence intervals and historical accuracy metrics.',
        label: 'Dashboard',
        image: '/screenshots/stock-dashboard.jpg'
      },
      {
        title: 'Model Performance',
        description: 'Detailed model performance visualization showing accuracy trends, loss curves, and prediction vs actual comparisons.',
        label: 'Performance',
        image: '/screenshots/stock-performance.jpg'
      },
      {
        title: 'Technical Analysis',
        description: 'Advanced charting interface with technical indicators, pattern recognition, and customizable analysis tools.',
        label: 'Analysis',
        image: '/screenshots/stock-analysis.jpg'
      }
    ]
  },
  'api-performance-monitor': {
    id: 'api-performance-monitor',
    title: 'API Performance Monitor',
    category: 'Backend',
    description: 'A concurrent Go application that periodically monitors multiple URLs for uptime and latency using goroutines, with real-time alert notifications.',
    image: '/projects/apiperformancehero.png',
    technologies: ['Go', 'Goroutines', 'net/http', 'SMTP', 'Discord Webhooks', 'JSON'],
    github: 'https://github.com/yourusername/api-performance-monitor',
    demo: null,
    duration: '1.5 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Developed a high-performance monitoring system using Go\'s concurrency features to track multiple API endpoints simultaneously, providing real-time uptime and latency monitoring with automated alerting.',
    problem: 'Manual monitoring of API endpoints is inefficient and reactive. Teams need proactive monitoring to detect downtime and performance issues before they impact users.',
    solution: 'Built a concurrent Go application leveraging goroutines to monitor multiple URLs simultaneously, with configurable thresholds and multiple notification channels for immediate alert delivery.',
    challenges: [
      'Implementing efficient concurrent monitoring without overwhelming target servers',
      'Managing goroutine lifecycle and preventing memory leaks during long-running operations',
      'Handling network timeouts and connection failures gracefully',
      'Designing flexible configuration system for different monitoring requirements',
      'Implementing reliable notification delivery with fallback mechanisms'
    ],
    features: [
      'Concurrent URL monitoring using goroutines',
      'Configurable check intervals and timeout settings',
      'Uptime and response time tracking',
      'Email notifications via SMTP',
      'Discord webhook integration for team alerts',
      'JSON-based configuration management',
      'Graceful error handling and retry logic',
      'Lightweight and resource-efficient design',
      'Real-time status logging and reporting',
      'Customizable alert thresholds'
    ],
    techDetails: {
      'Concurrency': 'Utilized Go\'s goroutines for concurrent URL checking, allowing simultaneous monitoring of multiple endpoints without blocking operations.',
      'HTTP Client': 'Implemented robust HTTP client using net/http package with configurable timeouts, custom headers, and connection pooling for optimal performance.',
      'Alert System': 'Dual notification system with SMTP for email alerts and Discord webhooks for instant team notifications, including retry logic for failed deliveries.',
      'Configuration': 'JSON-based configuration system for easy management of monitored URLs, check intervals, alert thresholds, and notification settings.',
      'Error Handling': 'Comprehensive error handling with exponential backoff for failed requests, graceful degradation, and detailed logging for troubleshooting.'
    },
    screenshots: [
      {
        title: 'Configuration Dashboard',
        description: 'JSON configuration interface showing monitored URLs, check intervals, and alert thresholds with validation and syntax highlighting.',
        label: 'Config',
        image: '/screenshots/apidash.png'
      },
      {
        title: 'Alert Notifications',
        description: 'Sample Discord notifications showing downtime alerts with detailed information and timestamps.',
        label: 'Alerts',
        image: '/screenshots/apidiscord.png'
      }
    ]
  },
  'fraud-detection': {
    id: 'fraud-detection',
    title: 'Financial Fraud Detection',
    category: 'Machine Learning',
    description: 'Advanced ML system handling extreme class imbalance (1:578) for credit card fraud detection with outstanding performance metrics.',
    image: '/projects/fraud-detection.jpg',
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'SMOTE', 'Pandas', 'Prometheus'],
    github: 'https://github.com/yourusername/fraud-detection',
    demo: 'https://fraud-detection-api.herokuapp.com',
    duration: '3 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Developed a comprehensive machine learning system to detect credit card fraud, successfully handling extreme class imbalance (1:578 ratio) through advanced feature engineering and sampling techniques.',
    problem: 'Credit card fraud detection faces extreme class imbalance with only 0.173% fraudulent transactions. Traditional ML models fail catastrophically with such skewed data, leading to either missed fraud or excessive false positives.',
    solution: 'Implemented a multi-layered approach combining advanced feature engineering (89 features from 31 original), SMOTE-Tomek resampling, and Random Forest classification to achieve 96.9% precision with 85.8% recall.',
    challenges: [
      'Handling extreme class imbalance (1:578 ratio) without losing model performance',
      'Creating discriminative features from anonymized V1-V28 columns',
      'Minimizing false positives to avoid customer friction while maximizing fraud detection',
      'Building a real-time API system capable of sub-30ms response times',
      'Implementing proper evaluation metrics for imbalanced data (PR-AUC over accuracy)'
    ],
    features: [
      'Advanced feature engineering with 89 derived features',
      'SMOTE-Tomek resampling for balanced training data',
      'Multiple ML models: Random Forest, SVM, Logistic Regression',
      'Real-time FastAPI service with <30ms response time',
      'Comprehensive evaluation using PR-AUC and ROC-AUC',
      'Docker containerization for easy deployment',
      'Prometheus monitoring and Grafana dashboards',
      'Automated model comparison and selection',
      'Threshold optimization for precision-recall balance',
      'Production-ready monitoring and alerting system'
    ],
    techDetails: {
      'Feature Engineering': 'Created 89 features from 31 original features including time-based patterns, amount statistics, V-column analysis, interaction features, and rolling window statistics.',
      'Imbalance Handling': 'Implemented SMOTE-Tomek resampling technique combining oversampling of minority class with undersampling of majority class for optimal balance.',
      'Model Selection': 'Compared Random Forest, SVM, and Logistic Regression with Random Forest achieving best PR-AUC (0.920) and precision-recall balance.',
      'API Development': 'Built FastAPI service with real-time prediction capabilities, achieving sub-30ms response times with comprehensive input validation.',
      'Monitoring': 'Integrated Prometheus metrics collection and Grafana dashboards for real-time performance monitoring and alerting.'
    },
    screenshots: [
      {
        title: 'Model Performance Dashboard',
        description: 'Comprehensive comparison of model performance showing PR-AUC, ROC-AUC, confusion matrices, and precision-recall curves for all tested algorithms.',
        label: 'Performance',
        image: '/screenshots/fraud-performance.jpg'
      },
      {
        title: 'Feature Engineering Pipeline',
        description: 'Advanced feature engineering interface showing the transformation from 31 original features to 89 engineered features with statistical analysis.',
        label: 'Features',
        image: '/screenshots/fraud-features.jpg'
      },
      {
        title: 'Real-time API Interface',
        description: 'FastAPI documentation and testing interface showing real-time fraud detection with response times and prediction confidence scores.',
        label: 'API',
        image: '/screenshots/fraud-api.jpg'
      },
      {
        title: 'Monitoring Dashboard',
        description: 'Grafana monitoring dashboard displaying real-time metrics, prediction accuracy, API performance, and fraud detection statistics.',
        label: 'Monitoring',
        image: '/screenshots/fraud-monitoring.jpg'
      }
    ]
  },
  'supply-chain-demand': {
    id: 'supply-chain-demand',
    title: 'M5 Supply Chain Demand Forecasting',
    category: 'Data Analytics',
    description: 'Enterprise-scale demand forecasting system achieving 2.07 RMSE accuracy, processing 58.3M records to generate 853,720 predictions for Walmart inventory optimization.',
    image: '/projects/suppluchaindemandbg.png',
    technologies: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    github: 'https://github.com/yourusername/supply-chain-demand',
    demo: 'https://supply-chain-dashboard.streamlit.app',
    duration: '3 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Built an enterprise-scale XGBoost forecasting system that predicts 28 days of future demand for 30,490 Walmart products across 10 stores. Processes 58.3M sales records to generate 853,720 actionable predictions, enabling 15-20% stockout reduction and optimizing $1B+ revenue through data-driven inventory planning.',
    problem: 'Walmart faces massive inventory challenges with 30,490 products across multiple stores. Poor demand forecasting leads to stockouts (lost sales) or overstock (increased costs). Traditional methods fail with sparse retail data where 68% of item-days have zero sales, requiring advanced ML approaches for accurate prediction.',
    solution: 'Developed a production-ready XGBoost forecasting pipeline with advanced feature engineering, processing 58.3M records efficiently. Created 17 predictive features including lag variables, rolling statistics, and temporal patterns. Achieved 2.07 RMSE validation accuracy while generating 853,720 specific demand predictions for 28-day planning horizon.',
    challenges: [
      'Processing massive 58.3M record dataset (41GB) with memory optimization and efficient data structures',
      'Handling extreme retail sparsity with 68% zero-sales days requiring specialized modeling approaches',
      'Engineering 17 leak-safe features preventing future data contamination in time series validation',
      'Optimizing XGBoost hyperparameters for sparse time series data with proper cross-validation',
      'Scaling predictions to 853,720 forecasts while maintaining production-level performance and accuracy'
    ],
    features: [
      'Enterprise-scale data processing: 58.3M records across 5+ years of sales history',
      'Advanced feature engineering: 17 predictive features including lag, rolling, and temporal variables',
      'Production XGBoost model: 2.07 RMSE validation accuracy with early stopping and optimization',
      'Comprehensive business intelligence: Sales analysis across states, categories, and time periods',
      'Actionable forecasting: 853,720 specific predictions for 28-day inventory planning horizon',
      'Visual analytics: Executive-ready charts showing sales patterns, trends, and forecast validation',
      'Scalable pipeline: Memory-optimized processing handling enterprise data volumes efficiently',
      'Business impact analysis: ROI calculations and operational improvement recommendations',
      'Multi-format outputs: Kaggle submissions, QuickSight dashboards, and business reports',
      'Production deployment: Complete pipeline from raw data to business decision support'
    ],
    techDetails: {
      'Data Engineering': 'Processed 58.3M sales records using memory-optimized Pandas operations, transforming wide-format sales data into efficient long format. Implemented data validation and quality checks ensuring forecast reliability.',
      'Feature Engineering': 'Created 17 predictive features: temporal (day_of_week, month, quarter), historical (sales_lag_7/14/28), trends (rolling_mean_7/14/28), price dynamics, and external factors (SNAP benefits, calendar events). All features designed with leak-safe validation.',
      'Machine Learning': 'XGBoost gradient boosting with hyperparameter optimization: max_depth=6, learning_rate=0.05, early_stopping_rounds=50. Achieved 2.073 validation RMSE and 2.292 training RMSE with proper time series validation preventing data leakage.',
      'Business Intelligence': 'Comprehensive EDA revealing California dominates 40% sales, FOODS category drives 60% revenue, weekend shopping peaks, and 3x December holiday spikes. Generated executive-ready insights for strategic planning.',
      'Production Pipeline': 'End-to-end automated pipeline from raw data ingestion to 853,720 predictions. Includes error handling, logging, model versioning, and multiple output formats for business consumption and technical deployment.'
    },
    businessImpact: {
      operationalBenefits: [
        'Inventory Optimization: 28-day demand visibility enables proactive planning',
        'Stockout Reduction: 15-20% improvement through accurate forecasting',
        'Cost Savings: Reduced emergency shipments and overstock waste',
        'Revenue Growth: Better product availability during high-demand periods'
      ],
      strategicValue: [
        'Data-Driven Decisions: Replace intuition with predictive analytics',
        'Competitive Advantage: Advanced forecasting capabilities',
        'Scalable Framework: Expandable to new products and regions',
        'ROI Delivery: Immediate operational improvements'
      ],
      keyMetrics: [
        { metric: 'Forecast Accuracy', achievement: '2.07 RMSE', value: 'Production-ready precision' },
        { metric: 'Scale', achievement: '58.3M records processed', value: 'Enterprise-level capability' },
        { metric: 'Coverage', achievement: '3,049 products, 3 states', value: 'Complete portfolio analysis' },
        { metric: 'Predictions', achievement: '853,720 future forecasts', value: '28-day planning horizon' }
      ]
    },
    visualizations: [
      {
        title: 'Sales Distribution Analysis',
        description: 'Comprehensive analysis showing California dominates with 40% of total sales, FOODS category drives 60% revenue, and clear geographic performance tiers.',
        image: '/projects/eda_sales_analysis.png',
        insights: ['California leads with 40% market share', 'FOODS category dominates revenue', '68% zero-sales days typical pattern', 'Clear geographic performance tiers']
      },
      {
        title: 'Time Series Patterns',
        description: 'Temporal analysis revealing strong weekend shopping preference, 3x December holiday spikes, and consistent 5-year growth trends.',
        image: '/projects/eda_time_series.png',
        insights: ['Weekend shopping peaks (Sat-Sun)', '3x December holiday sales spike', 'Consistent 5-year growth trend', 'Clear seasonal patterns for planning']
      },
      {
        title: 'Store & Product Performance',
        description: 'Performance analysis showing top 10 stores drive 45% of sales, star products requiring never-stock-out policies, and 5x department variation.',
        image: '/projects/eda_stores_items.png',
        insights: ['Top 10 stores drive 45% sales', 'Star products need stock priority', 'Price volatility affects demand', '5x performance variation by department']
      },
      {
        title: 'Forecast Validation',
        description: 'Model validation showing smooth transition from historical to future predictions, with lag features as strongest predictors.',
        image: '/projects/m5_true_forecast_analysis_20250908_040019.png',
        insights: ['Smooth historical-to-future transition', 'Lag features strongest predictors', 'State-level realistic proportions', 'Captures seasonal and trend patterns']
      }
    ],
    results: {
      runId: '20250908_040019',
      model: 'XGBoost (Production-optimized gradient boosting)',
      forecastPeriod: '28-day demand horizon (d_1914 to d_1941)',
      validationRMSE: '2.073',
      finalModelRMSE: '2.292',
      totalPredictions: '853,720',
      forecastRange: '0.06 to 118.53',
      uniqueItems: '30,490',
      dataScale: '58.3M records',
      businessValue: '$1B+ revenue optimization',
      stockoutReduction: '15-20% improvement',
      outputFiles: [
        { type: 'Production Models', file: 'XGBoost models ready for deployment' },
        { type: '28-Day Predictions', file: 'Complete demand forecasts for planning' },
        { type: 'Business Intelligence', file: 'QuickSight-ready executive dashboards' },
        { type: 'Performance Metrics', file: 'Validation results and confidence intervals' }
      ],
      capabilities: [
        'Production-Scale Forecasting: 853K predictions with enterprise reliability',
        'Business Intelligence: Executive dashboards and actionable insights',
        'Inventory Optimization: 28-day planning horizon with 2.07 RMSE accuracy',
        'ROI Delivery: Measurable stockout reduction and revenue optimization'
      ]
    }
  },
  'fake-news-detection': {
    id: 'fake-news-detection',
    title: 'Fake News Detection using Machine Learning',
    category: 'Machine Learning',
    description: 'Comprehensive research project achieving 94.47% accuracy using advanced ML algorithms and NLP techniques to detect misinformation in digital media.',
    image: '/projects/fakenewshero.png',
    technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'BeautifulSoup', 'NLTK', 'Pandas', 'NumPy'],
    github: 'https://github.com/yourusername/fake-news-detection',
    demo: 'https://fake-news-detector.streamlit.app',
    duration: '2 months',
    team: 'Solo Project',
    status: 'completed',
    overview: 'Developed a comprehensive fake news detection system using advanced machine learning algorithms to combat misinformation. This research project addresses the urgent need for reliable source verification in the digital age, utilizing sophisticated NLP techniques and achieving superior classification accuracy.',
    problem: 'The prevalence of fake news in today\'s digital age poses a significant threat to the integrity of information and public discourse. With rapid advancement of online platforms and social media, dissemination of misleading and fabricated information has become increasingly pervasive, undermining trust in traditional news sources and challenging democratic societies.',
    solution: 'Implemented a systematic three-stage approach: (1) Advanced text preprocessing with stopword removal, HTML tag cleaning, and special character normalization using BeautifulSoup, (2) Feature extraction using TF-IDF vectorization to transform textual data into numerical vectors, (3) Comparative analysis of five machine learning algorithms to identify the most effective classification model.',
    features: [
      'Advanced text preprocessing pipeline with HTML tag removal using BeautifulSoup',
      'TF-IDF vectorization for optimal feature extraction and numerical transformation',
      'Comprehensive evaluation of 5 ML algorithms: k-NN, Random Forest, Decision Tree, Gradient Boosting, and Passive Aggressive',
      'Balanced dataset analysis with 6,335 news articles (50.1% real, 49.9% fake)',
      'Achieved 94.47% accuracy with Passive Aggressive algorithm',
      'Character-level analysis for title and text length pattern recognition',
      'Robust data preprocessing including stopword filtering and text normalization',
      'Performance comparison across multiple algorithms with detailed accuracy metrics',
      'Election-focused dataset from 2018 ensuring contemporary relevance',
      'Systematic methodology with three distinct processing stages'
    ],
    challenges: [
      'Processing unstructured data with numerous impurities including HTML tags, special characters, and punctuation',
      'Implementing effective stopword removal and text normalization techniques for optimal classification',
      'Handling diverse text lengths and formats across different news sources and writing styles',
      'Developing robust feature extraction methods to capture semantic meaning from textual content',
      'Comparing and optimizing five different machine learning algorithms for best performance',
      'Ensuring model generalization across diverse political and news contexts from election data',
      'Balancing computational efficiency with classification accuracy across different algorithm complexities'
    ],
    techDetails: {
      'Data Preprocessing': 'Implemented comprehensive text cleaning using Python Standard Library and BeautifulSoup for HTML tag removal, compile function for punctuation elimination, and preprocess_text function for character normalization. Applied stopword filtering to remove non-contributory words like "the," "in," "a," etc.',
      'Feature Engineering': 'Utilized Term Frequency-Inverse Document Frequency (TF-IDF) vectorization to convert textual data into numerical vectors. TF-IDF assigns high values to document-specific terms while reducing weights of commonly repeated words across all documents, optimizing feature representation.',
      'Machine Learning Models': 'Comparative implementation of five algorithms: k-NN (83.03% accuracy), Random Forest (91.08% accuracy), Decision Tree, Gradient Boosting (93% accuracy), and Passive Aggressive (94.47% accuracy). Each model evaluated on identical preprocessed dataset for fair comparison.',
      'Dataset Analysis': 'Processed balanced dataset of 6,335 news articles from Kaggle with 3,171 real and 3,164 fake samples. Identified patterns in title lengths (fake: 50-100 chars, real: 40-80 chars) and text characteristics for enhanced classification accuracy.',
      'Performance Optimization': 'Achieved optimal balance between accuracy and computational efficiency, with Random Forest providing fastest training (15.72 seconds) while Passive Aggressive delivered highest accuracy (94.47%) for production deployment.'
    },
    results: {
      datasetSize: '6,335',
      balanceRatio: '50.1% Real, 49.9% Fake',
      bestAccuracy: '94.47%',
      bestAlgorithm: 'Passive Aggressive',
      secondBest: 'Gradient Boosting (93%)',
      fastestTraining: 'Random Forest (15.72s)',
      algorithms: [
        { name: 'Passive Aggressive', accuracy: '94.47%', runtime: 'Fast' },
        { name: 'Gradient Boosting', accuracy: '93%', runtime: 'Medium' },
        { name: 'Random Forest', accuracy: '91.08%', runtime: '15.72s' },
        { name: 'k-NN (K=1)', accuracy: '83.03%', runtime: '764.65s' },
        { name: 'Decision Tree', accuracy: 'Evaluated', runtime: 'Fast' }
      ],
      keyFindings: [
        'Balanced dataset with equal representation of real and fake news articles',
        'Title length patterns: Fake news typically 50-100 characters, Real news 40-80 characters',
        'Text length analysis: Real news articles typically 0-10,000 characters',
        'Passive Aggressive algorithm achieved highest accuracy for fake news classification',
        'TF-IDF vectorization proved most effective for textual feature extraction'
      ]
    }
  }
  // Add more projects as needed
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <ProjectHeader />
        <div className={styles.projectPage}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '50vh',
            color: 'var(--text-primary)' 
          }}>
            Loading...
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!project) {
    return (
      <>
        <ProjectHeader />
        <div className={styles.notFound}>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link href="/#projects" className={styles.backLink}>
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ProjectHeader />
      <div className={styles.projectPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Link href="/#projects" className={styles.backButton}>
            <FaArrowLeft />
            Back to Projects
          </Link>
          
          <div className={styles.heroMain}>
            <div className={styles.heroText}>
              <div className={styles.projectCategory}>{project.category}</div>
              <h1 className={styles.projectTitle}>{project.title}</h1>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <FaCalendarAlt />
                  <span>{project.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <FaUsers />
                  <span>{project.team}</span>
                </div>
                <div className={styles.metaItem}>
                  <FaCheckCircle />
                  <span className={styles.statusCompleted}>{project.status}</span>
                </div>
              </div>

              <div className={styles.projectLinks}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <FaGithub />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.primary}`}>
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className={styles.heroImage}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className={styles.heroProjectImg}
                  priority={true}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.projectIcon}>
                    <FaCog />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className={styles.contentContainer}>
        {/* Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaLightbulb />
            Project Overview
          </h2>
          <p className={styles.sectionContent}>{project.overview}</p>
        </section>

        {/* Problem & Solution */}
        <section className={styles.section}>
          <div className={styles.problemSolution}>
            <div className={styles.problemSolutionItem}>
              <h3>The Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div className={styles.problemSolutionItem}>
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCog />
            Technologies Used
          </h2>
          <div className={styles.technologiesGrid}>
            {project.technologies.map((tech: string, index: number) => (
              <div key={index} className={styles.techItem}>
                <span className={styles.techName}>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featuresList}>
            {project.features.map((feature: string, index: number) => (
              <div key={index} className={styles.featureItem}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Implementation</h2>
          <div className={styles.techDetails}>
            {Object.entries(project.techDetails).map(([key, value]) => (
              <div key={key} className={styles.techDetailItem}>
                <h4>{key}</h4>
                <p>{value as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Screenshots or Results */}
        <section className={styles.section}>
          {project.results ? (
            <>
              <h2 className={styles.sectionTitle}>
                <FaChartBar />
                {project.id === 'supply-chain-demand' ? 'Forecasting Results' : 'Research Results'}
              </h2>
              <div className={styles.resultsContainer}>
                {project.id === 'supply-chain-demand' ? (
                  <>
                    {/* Supply Chain Key Metrics */}
                    <div className={styles.metricsGrid}>
                      {project.businessImpact?.keyMetrics.map((metric: any, index: number) => (
                        <div key={index} className={styles.metricCard}>
                          <div className={styles.metricValue}>{metric.achievement}</div>
                          <div className={styles.metricLabel}>{metric.metric}</div>
                          <div className={styles.metricDescription}>{metric.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Business Impact */}
                    <div className={styles.performanceSection}>
                      <h4>💼 Business Impact</h4>
                      <div className={styles.businessImpactGrid}>
                        <div className={styles.impactCategory}>
                          <h5>Operational Benefits</h5>
                          <div className={styles.benefitsList}>
                            {project.businessImpact?.operationalBenefits.map((benefit: string, index: number) => (
                              <div key={index} className={styles.benefitItem}>
                                <FaCheckCircle />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles.impactCategory}>
                          <h5>Strategic Value</h5>
                          <div className={styles.benefitsList}>
                            {project.businessImpact?.strategicValue.map((value: string, index: number) => (
                              <div key={index} className={styles.benefitItem}>
                                <FaRocket />
                                <span>{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Visualizations */}
                    <div className={styles.deploymentSection}>
                      <h4>📊 Data Insights & Visualizations</h4>
                      <div className={styles.visualizationsGrid}>
                        {project.visualizations?.map((viz: any, index: number) => (
                          <div key={index} className={styles.visualizationCard}>
                            <div className={styles.vizImageContainer}>
                              {viz.image ? (
                                <Image
                                  src={viz.image}
                                  alt={viz.title}
                                  width={800}
                                  height={600}
                                  style={{ width: '100%', height: 'auto' }}
                                  className={styles.vizImage}
                                  priority={index < 2}
                                />
                              ) : (
                                <div className={styles.vizPlaceholder}>
                                  <FaChartBar />
                                  <span>Visualization</span>
                                </div>
                              )}
                            </div>
                            <div className={styles.vizContent}>
                              <h6>{viz.title}</h6>
                              <p>{viz.description}</p>
                              <div className={styles.vizInsights}>
                                {viz.insights.map((insight: string, idx: number) => (
                                  <span key={idx} className={styles.insightTag}>
                                    {insight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </>
                ) : (
                  <>
                    {/* Fake News Detection Key Metrics */}
                    <div className={styles.metricsGrid}>
                      <div className={styles.metricCard}>
                        <div className={styles.metricValue}>{project.results.bestAccuracy}</div>
                        <div className={styles.metricLabel}>Best Accuracy</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricValue}>{project.results.datasetSize}</div>
                        <div className={styles.metricLabel}>Dataset Size</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricValue}>5</div>
                        <div className={styles.metricLabel}>ML Algorithms</div>
                      </div>
                      <div className={styles.metricCard}>
                        <div className={styles.metricValue}>Balanced</div>
                        <div className={styles.metricLabel}>Data Distribution</div>
                      </div>
                    </div>

                    {/* Algorithm Performance */}
                    <div className={styles.performanceSection}>
                      <h4>Algorithm Performance Comparison</h4>
                      <div className={styles.algorithmsList}>
                        {project.results.algorithms.map((algorithm: any, index: number) => (
                          <div key={index} className={styles.algorithmItem}>
                            <div className={styles.algorithmRank}>#{index + 1}</div>
                            <div className={styles.algorithmInfo}>
                              <span className={styles.algorithmName}>{algorithm.name}</span>
                              <span className={styles.algorithmAccuracy}>{algorithm.accuracy}</span>
                            </div>
                            <div className={styles.algorithmRuntime}>{algorithm.runtime}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Findings */}
                    <div className={styles.deploymentSection}>
                      <h4>Key Research Findings</h4>
                      <div className={styles.deploymentList}>
                        {project.results.keyFindings.map((finding: string, index: number) => (
                          <div key={index} className={styles.deploymentItem}>
                            <FaCheckCircle />
                            <span>{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : project.screenshots ? (
            <>
          <h2 className={styles.sectionTitle}>
            <FaRocket />
            Project Screenshots
          </h2>
          <div className={styles.screenshotsGallery}>
            {project.screenshots.map((screenshot: any, index: number) => (
              <div key={index} className={styles.screenshotItem}>
                <div className={styles.screenshotImage}>
                      {screenshot.image ? (
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          className={styles.screenshotImg}
                          priority={index < 2}
                        />
                      ) : (
                  <div className={styles.screenshotPlaceholder}>
                    <span className={styles.screenshotIcon}>📱</span>
                        </div>
                      )}
                      <div className={styles.screenshotOverlay}>
                    <span className={styles.screenshotLabel}>{screenshot.label}</span>
                  </div>
                </div>
                <div className={styles.screenshotInfo}>
                  <h4>{screenshot.title}</h4>
                  <p>{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
            </>
          ) : null}
        </section>

        {/* Challenges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
          <div className={styles.challengesList}>
            {project.challenges.map((challenge: string, index: number) => (
              <div key={index} className={styles.challengeItem}>
                <div className={styles.challengeNumber}>{index + 1}</div>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Navigation */}
        <section className={styles.navigationSection}>
          <Link href="/#projects" className={styles.backToProjects}>
            <FaArrowLeft />
            Back to All Projects
          </Link>
        </section>
      </div>
      </div>
      <Footer />
    </>
  )
}
