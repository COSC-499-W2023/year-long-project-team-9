import json
import uuid
from datetime import datetime, timedelta

def generate_uuid():
    return str(uuid.uuid4())

def current_timestamp():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def generate_users(n):
    # Mimic object notation without quotes for keys (Python code, but TypeScript in style)
    users = [dict(
        email=f'user{i}@example.com',
        givenName=f'Given{i}',
        familyName=f'Family{i}',
        isLoggedInWithSocialIdentityProvider=False,
        isAdmin=i % 2 == 0,
        profileImage=None,
        preference='{}',
        connectionId=None,
    ) for i in range(n)]
    return users

def generate_requests(users, n):
    requests = [dict(
        requestId=generate_uuid(),
        requestTitle=f'Request Title {i}',
        requesterEmail=users[i % len(users)]['email'],
        grouping=None,
        description=f'Description for request {i}',
        blurred=i % 2 == 0,
        dueDate=(datetime.now() + timedelta(days=30)).date().isoformat(),
        creationDate=current_timestamp(),
    ) for i in range(n)]
    return requests

def generate_submissions(requests, users, n):
    statuses = ['TODO', 'PROCESSING', 'COMPLETED', 'FAILED', 'ARCHIVED']
    submissions = [dict(
        submissionId=generate_uuid(),
        requesteeEmail=users[i % len(users)]['email'],
        status=statuses[i % len(statuses)],
        isRead=False if i % 2 == 0 else True,
        submittedDate=None if i % 3 == 0 else current_timestamp(),
        requestId=requests[i % len(requests)]['requestId'],
        grouping=None,
        title=f'Submission Title {i}',
    ) for i in range(n)]
    return submissions

def generate_rooms(users, n):
    rooms = [dict(
        roomId=generate_uuid(),
        participant1Email=users[i % len(users)]['email'],
        participant2Email=users[(i + 1) % len(users)]['email'],
        participant1RoomGivenName=users[i % len(users)]['givenName'],
        participant1RoomFamilyName=users[i % len(users)]['familyName'],
        participant2RoomGivenName=users[(i + 1) % len(users)]['givenName'],
        participant2RoomFamilyName=users[(i + 1) % len(users)]['familyName'],
        isActive=True if i % 2 == 0 else False,
        creationDate=datetime.now().date().isoformat(),
    ) for i in range(n)]
    return rooms

def generate_messages(rooms, users, n):
    messages = [dict(
        messageId=generate_uuid(),
        roomId=room['roomId'],
        senderEmail=users[i % len(users)]['email'],
        creationDate=current_timestamp(),
        messageContent=f'Message content {i}',
        isRead=True if i % 2 == 0 else False,
    ) for i, room in enumerate(rooms) for _ in range(n // len(rooms))]
    return messages

def generate_notifications(users, n):
    notification_types = ['ALERT', 'REMINDER', 'MESSAGE']
    notifications = [dict(
        notificationId=generate_uuid(),
        userEmail=users[i % len(users)]['email'],
        type=notification_types[i % len(notification_types)],
        creationDate=current_timestamp(),
        content=f'Notification content {i}',
        isRead=False if i % 2 == 0 else True,
        isTrashed=True if i % 3 == 0 else False,
    ) for i in range(n)]
    return notifications

path = "./stack/database/data/"



with open(path + "users.json", "w") as f:
    users = generate_users(30)
    json.dump(users, f)

    with open(path + "requests.json", "w") as f:
        requests = generate_requests(users, 30)
        json.dump(requests, f)


    with open(path + "submissions.json", "w") as f:
        submissions = generate_submissions(requests, users, 30)
        json.dump(submissions, f)

    with open(path + "rooms.json", "w") as f:
        rooms = generate_rooms(users, 30)
        json.dump(rooms, f)

    with open(path + "messages.json", "w") as f:
        messages = generate_messages(rooms, users, 30)
        json.dump(messages, f)

    with open(path + "notifications.json", "w") as f:
        notifications = generate_notifications(users, 30)
        json.dump(notifications, f)