#QT Thread 使用筆記

!tag qt, thread 
!publish


## Notes
1. 物件在哪一個thread中被實例化，則該物件(包含旗下的property)存在於該thread
2. 物件實例化後的member function是在哪一個thread中執行就需要去釐清。
3. 當想要存取別的thread中的資料時，使用signal/slots

##架構
1. main thread實例一個繼承自QThread (newThread)的物件，該物件存在於 main thread
2. newThread run() 中的statement會在新的thread中執行
3. 在run() 中宣告一個toolbox，並connect signal/slots

##Usage範例
###使用情境
我們希望在main thread之外，能有一個thread (i.e. newThread class) 幫我們處理一些事務，這些事務通常是影像處理、控制器如狀態機等)，而toolbox class是我們會在newThead中使用到的工具箱函式。我們會在新的thread中實例化toolbox，因此toolbox會存在於新的thread中。所以當main thread想要得知toolbox中的特別參數時，我們使用signal/slots的方式來作thread之間的溝通。

####在新的thread中實例化toolbox
必須在newThread底下的run()之中宣告，該toolbox才會存在於新的thread，若是在其他地方宣告，如Initialize()之前，則仍會存在於main thread之中

####在run()之中執行，並不一定先或後執行
在run()中執行thread_property =1，但是main thread中執行get_property()取得thread_property值，因為在不同的thread中運行，所以會讀取到0(初始值)或1(修改值)並不一定。

####用signal/slots的方式取得不同thread中的值
newThread包含一個SIGNAL(getparametersignal())，當main thread欲取得toolbox中資料的時候，trigger這個SIGNAL，而對應的slot是toolbox中的SLOT(getparameter())

main.cpp

	pnewThread = new newThread();
	pnewThread->start(); // run() 這個function 在新的thread中開始執行
	pnewThread->state(); // @main thread
	pnewThread->get_property(); //取得newThread中的property 
	pnewThread->accessToolbox(); //在此member function中emit signal 通知toolbox 

newThread.h

	#include <qthread.h>
	#include <QDebug>
	#include "toolbox.h"
	class newThread: public QThread
	{
		Q_OBJECT
	public:
		newThread();
		~newThread();
		int Initialize(void);
		int executing(int input);
		void accessToolbox();
		void get_property();
	private:
		toolbox *ptoolbox;
		int thread_property =0;
	protected:
		void run();
	signals:
		void getparametersignal();
	};

newThread.cpp

	#include "newThread.h"


	newThread::newThread()
	{
		this->Initialize();
	}


	newThread::~newThread()
	{
	}

	int newThread::Initialize(void){	
		return 0;
	}

	int newThread::executing(int input){
		qDebug() << __FUNCTION__ << "newThread function:" << this->currentThreadId() << endl;	
		ptoolbox = new toolbox();
		ptoolbox->image_processing(input);
		connect(this, SIGNAL(getparametersignal()), ptoolbox, SLOT(getparameter()));
		return 0;
	}

	void newThread::run(void){
		//qDebug() << __FUNCTION__ << "newThread function:" << this->currentThreadId() << endl;
		this->executing(5);
		this->thread_property = 1;

	}

	void newThread::accessToolbox(){
		emit getparametersignal();
	}

	void newThread::get_property(){
		qDebug() << __FUNCTION__ << thread_property << endl;
	};

toolbox.h

	#include <qdebug.h>
	#include <qthread.h>
	class toolbox: public QThread
	{	
		Q_OBJECT
	public:
		toolbox();
		~toolbox();
		int image_processing(int input);
	private:
		int parameter;
	private slots:
		int getparameter();
	};

toolbox.cpp

	#include "toolbox.h"
	toolbox::toolbox()
	{
	}


	toolbox::~toolbox()
	{
	}

	int toolbox::image_processing(int input){
		parameter = input;
		qDebug() << __FUNCTION__ << "image_processing:" << this->currentThreadId() << ", parameter:" << parameter << endl;	
		return 0;
	}

	int toolbox::getparameter(){
		qDebug() << __FUNCTION__ << parameter << endl;
		return 0;
	};

##Application
1. image processing 
2. FSM

##references
1. [Qt event system](http://doc.qt.io/qt-5/eventsandfilters.html)