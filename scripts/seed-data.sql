-- Seed data for portfolio website

-- Insert sample projects
INSERT INTO projects (name, description, technologies, category, github_url, live_url, image_url, featured) VALUES
('ML Image Classifier', 'Deep learning model for image classification using CNN architecture with 95% accuracy on test dataset', ARRAY['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'], 'Machine Learning', 'https://github.com/username/ml-classifier', 'https://ml-classifier-demo.vercel.app', '/placeholder.svg?height=200&width=300', true),

('Full-Stack E-commerce', 'Modern e-commerce platform with payment integration, inventory management, and admin dashboard', ARRAY['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'PostgreSQL'], 'Web Development', 'https://github.com/username/ecommerce-app', 'https://ecommerce-demo.vercel.app', '/placeholder.svg?height=200&width=300', true),

('Data Analytics Dashboard', 'Interactive dashboard for visualizing complex datasets and ML model performance metrics', ARRAY['React', 'D3.js', 'Python', 'FastAPI', 'Pandas'], 'Data Science', 'https://github.com/username/analytics-dashboard', 'https://analytics-demo.vercel.app', '/placeholder.svg?height=200&width=300', true),

('NLP Sentiment Analyzer', 'Natural language processing tool for sentiment analysis of social media posts and reviews', ARRAY['Python', 'NLTK', 'Transformers', 'FastAPI', 'Redis'], 'Machine Learning', 'https://github.com/username/sentiment-analyzer', 'https://sentiment-demo.vercel.app', '/placeholder.svg?height=200&width=300', false),

('Real-time Chat App', 'Scalable real-time messaging application with WebSocket support and message encryption', ARRAY['Node.js', 'Socket.io', 'React', 'MongoDB', 'JWT'], 'Web Development', 'https://github.com/username/chat-app', 'https://chat-demo.vercel.app', '/placeholder.svg?height=200&width=300', false),

('Time Series Forecasting', 'LSTM-based model for predicting stock prices and cryptocurrency trends with high accuracy', ARRAY['Python', 'PyTorch', 'Pandas', 'Matplotlib', 'Jupyter'], 'Machine Learning', 'https://github.com/username/time-series-forecasting', NULL, '/placeholder.svg?height=200&width=300', false);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, published) VALUES
('Getting Started with Machine Learning in 2024', 'getting-started-ml-2024', '# Getting Started with Machine Learning in 2024\n\nMachine learning has become more accessible than ever...', 'A comprehensive guide for beginners looking to start their ML journey', true),

('Building Scalable Web Applications with Next.js', 'scalable-nextjs-apps', '# Building Scalable Web Applications with Next.js\n\nNext.js has revolutionized how we build React applications...', 'Best practices and patterns for building production-ready Next.js applications', true),

('The Future of AI in Software Development', 'future-ai-software-development', '# The Future of AI in Software Development\n\nArtificial Intelligence is transforming how we write code...', 'Exploring how AI tools are changing the software development landscape', false);
