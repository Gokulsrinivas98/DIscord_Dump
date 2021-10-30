#include<windows.h>

#define WINDOW_STYLE        WS_VISIBLE+WS_OVERLAPPEDWINDOW-WS_THICKFRAME-WS_MAXIMIZEBOX
#define WINDOW_WIDTH        640
#define WINDOW_HEIGHT       480
#define TILE_SIZE           40
#define HORIZONTAL_TILES    WINDOW_WIDTH/TILE_SIZE 
#define VERTICAL_TILES      WINDOW_HEIGHT/TILE_SIZE
#define START_X             HORIZONTAL_TILES/2
#define START_Y             VERTICAL_TILES/2

const char* window_name = "Snek";
RECT window_rect = {0,0, WINDOW_WIDTH,WINDOW_HEIGHT};
int* snake_pos = NULL;
int  food_pos[] = {0, 0};
int snake_len = 1;

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam){
    switch(uMsg){
        case WM_PAINT:{
            PAINTSTRUCT ctx;
            HDC device= BeginPaint(hwnd,&ctx);
            
            for (int i=0; i<snake_len ; i++){
                Rectangle(
                    device,
                    snake_pos[i*2]*TILE_SIZE,
                    snake_pos[i*2+1]*TILE_SIZE,
                    (snake_pos[i*2]+1)*TILE_SIZE,
                    (snake_pos[i*2+1]+1)*TILE_SIZE);
            }
            Rectangle(
                    device,
                    food_pos[0]*TILE_SIZE,
                    food_pos[1]*TILE_SIZE,
                    (food_pos[0]+1)*TILE_SIZE,
                    (food_pos[1])*TILE_SIZE);
            EndPaint(hwnd, &ctx);
            break;
        }
        case WM_CLOSE:
            PostQuitMessage(0);
            break;
    }
    return DefWindowProcA(hwnd,uMsg,wParam,lParam);
}
int main(){
    int ret=0;
HMODULE instance = GetModuleHandleA(NULL);

WNDCLASSEXA window_class;
window_class.cbSize = 48;
window_class.style = CS_OWNDC|CS_HREDRAW|CS_VREDRAW;
window_class.lpfnWndProc= WindowProc;
window_class.cbClsExtra =0;
window_class.cbWndExtra = 0;
window_class.hInstance = instance;
window_class.hIcon= LoadIconA(IDI_APPLICATION,0);
window_class.hCursor= LoadCursorA(IDI_APPLICATION,0);
window_class.hbrBackground = CreateSolidBrush(0);
window_class.lpszMenuName=0;
window_class.lpszClassName=window_name;
window_class.hIconSm=0;

if(RegisterClassExA(&window_class)){
	HANDLE heap = GetProcessHeap();
    snake_pos = HeapAlloc(heap,0,sizeof(int)*2);
    snake_pos[0]= START_X;
    snake_pos[1]= START_Y;
    HWND window = CreateWindowExA(
        0,
        window_name,
        window_name,
        WINDOW_STYLE,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        window_rect.right - window_rect.left,
        window_rect.bottom-window_rect.top,
        0,
        0,
        instance,
        NULL );

    ShowWindow(window,SW_SHOW);
    UpdateWindow(window);   
    MSG msg;

    while(1){
        if(PeekMessageA(&msg,0,0,0,PM_REMOVE)){
            if(msg.message == WM_QUIT){
                break;
            }else{
                TranslateMessage(&msg);
                DispatchMessage(&msg);
        }
    }
HeapFree(heap,0,snake_pos);
}}
else{
    ret=1;
}
ExitProcess(0);
return ret;
}
