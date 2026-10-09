FROM python:3.12-slim
WORKDIR /app
COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt 
COPY . .
EXPOSE 5000
USER 1001
CMD ["python", "app.py"]