# REST API Reference
- version: 1.0.0
- Servers: 
  - `http://example.server.mine/api`

OAS를 흉내낸 자체 API 템플릿을 사용해서 REST API 문서를 만들었습니다.

## Summary {#summary-rest-api-reference }

Members                        | Descriptions
--------------------------------|---------------------------------------------
[`GET /user/{user_id}`](#get--user-user-id-) | 사용자 정보 조회
[`POST /user/{user_id}`](#post--user-user-id-) | 사용자 정보 변경

## Common response {#response-common-fields }

Fields         | Type           | Description
:--------------------:|-----------------|---------------------------------------------
`resultCode` | string |  다음 중 하나여야 합니다. <br/>- good<br/>- bad<br/>
`resultString` | string | 상세한 결과 설명이 들어갑니다. 

## 사용자 정보 조회 `GET` `/user/{user_id}` {#get--user-user-id- }

주어진 아이디(user_id)의 사용자 정보를 조회합니다.
요청이 성공적으로 서버에 전달되면 200 OK를 반환하며, 요청 처리 중 발생한 오류는 응답 객체의 `resultCode` 필드에 나타납니다. [공용 응답 필드](#response-common-fields)를 참고하십시오.

### Request parameters {#parameters-get--user-user-id- }

Parameter         | Type           | Description
:--------------------:|-----------------|---------------------------------------------
`user_id`<br/>(path) | string | 조회할 사용자 ID. 사용자 ID는 [사용자 목록](/apis/get-user-list)에서 확인할 수 있습니다.  


### Response {#response-get--user-user-id- }
HTTP Result Code가 200 OK일 때 반환하는 정보입니다.


Field              | Type           | Description
:--------------------:|-----------------|---------------------------------------------
user_info | [object](#object-userinfo) |  


#### 성공 예제:
```json
{
  "user_info": {
    "id": "my-user-id",
    "name": "myname",
    "image": "http://open.server.ip/profile/000/272/272211.jpg"
  }
}
```


### Object definition

#### userInfo {#object-userinfo }

Field              | Type           | Description
:--------------------:|-----------------|---------------------------------------------
 `id` | string | 사용자의 고유 ID 
 `name` | string | 사용자의 이름 
 `image` | string | 사용자의 사진이 저장된 URL 

## 사용자 정보 변경 `POST` `/user/{user_id}` {#post--user-user-id- }

주어진 아이디(`user_id`)의 사용자 정보를 변경합니다.

### Request parameters {#parameters-post--user-user-id- }

Parameter         | Type           | Description
:--------------------:|-----------------|---------------------------------------------
`user_id`<br/>(path) | string | 조회할 사용자 ID. 사용자 ID는 [사용자 목록](/apis/user--user-id-)에서 확인할 수 있습니다.  
`user_name`<br/>(body) | string | 변경할 사용자 이름입니다.  
`image`<br/>(body) | string | 변경할 사용자의 사진 URL입니다.  


### Response {#response-post--user-user-id- }


> **NOTE**
>
> 이 API는 [공용 응답 필드](#response-common-fields)를 함께 반환합니다. 해당 항목을 참고하십시오.



#### 성공 예제:
```json
{
  "resultCode": "good",
  "resultString": "No problem"
}
```



