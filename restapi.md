## Summary

Members                        | Descriptions
--------------------------------|---------------------------------------------
GET /user/{user_id}        | 사용자 정보 조회

## 사용자 정보 조회 `GET /user/{user_id}` 
주어진 아이디(user_id)의 사용자 정보를 조회합니다.
요청이 성공적으로 서버에 전달되면 200 OK를 반환하며, 요청 처리 중 발생한 오류는 응답 객체의  &#x60;error&#x60; 필드에 나타납니다.

### Request parameters
Parameter         | Type           | Description
--------------------|-----------------|---------------------------------------------
`user_id`<br/>(path) |   | 조회할 사용자 ID. 사용자 ID는 [사용자 목록](/apis/user-list)에서 확인할 수 있습니다.  


### Response
HTTP Result Code가 200 OK일 때 반환하는 정보입니다. [공용 응답 필드](/apis/response-common-fields)를 참고하십시오.

Field              | Type           | Description
--------------------|-----------------|---------------------------------------------
id | string | 파라미터로 수신한 &#x60;user_id&#x60; name | string | 사용자의 이름 image | object | 사용자의 사진이 저장된 URL 


성공 예제:
```json
{
  "id": "my-user-id",
  "name": "myname",
  "images": "http://open.server.ip/profile/000/272/272211.jpg"
}
```


