FROM python:3.8.3-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /apiCRUD
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000
