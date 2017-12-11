!code
#ifdef GUI_VERSION_QT_WITH_CONSOLE
//Create a Console attached to this GUI app for showing debug messages.
AllocConsole();
AttachConsole(GetCurrentProcessId());
freopen("CON", "w", stdout);//Redirect stdout
/*HWND handle = GetConsoleWindow();
if (handle == NULL){

}
else{
ShowWindow(handle, SW_MINIMIZE);
}
*/
//End Create a Console attached to this GUI app for showing debug messages.
#endif



#ifdef GUI_VERSION_QT_WITH_CONSOLE
FreeConsole();
#endif​
!codee