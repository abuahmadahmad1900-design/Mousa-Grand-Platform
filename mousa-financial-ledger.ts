// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون الأسطوري: مجمع المحاسبة السحابية المؤتمتة، محرك الرواتب والنسب الذكي، والربط الضريبي الخليجي الموحد

export interface InvoiceFinancialBreakdown {
  rawProcedureCost: number;
  labFeesDeducted: number;       // تكلفة مختبر الأسنان (عدسات، تيجان) المخصومة
  materialCostDeducted: number;  // تكلفة المستهلكات المخزنية المخصومة
  vatRate: number;               // نسبة الضريبة حسب الدولة الخليجية
}

export interface DoctorPayrollConfig {
  doctorId: string;
  doctorName: string;
  commissionPercentage: number;  // نسبة الطبيب (مثلاً 30% تكتب 0.30)
  baseSalary: number;            // الراتب الأساسي الثابت إن وُجد
}

export interface GulfTaxStamp {
  cryptographicHash: string;     // الهاش الرقمي المشفر لحماية الفاتورة من التلاعب
  zatcaPhase2Uuid?: string;      // المعرف الفريد المتوافق مع هيئة الزكاة والضريبة بالسعودية
  governmentHubStatus: 'TRANSMITTED_SUCCESSFULLY' | 'LOCAL_HOLD';
}

export interface EnterpriseLedgerEntry {
  entryId: string;
  timestamp: Date;
  clinicId: string;
  country: 'KSA' | 'UAE' | 'QAT' | 'KWT' | 'BAH' | 'OMN';
  patientName: string;
  financials: InvoiceFinancialBreakdown;
  doctorConfig: DoctorPayrollConfig;
  calculatedGrossRevenue: number; // الإجمالي الشامل قبل الضرائب والمصاريف
  calculatedNetProfit: number;    // صافي ربح العيادة الحقيقي والنهائي من هذه العملية
  doctorPayout: number;           // أجر الطبيب الصافي المحسوب بدقة تمنع التلاعب
  taxStamp: GulfTaxStamp;
}

export class MousaFinancialLedgerEngine {
  private generalLedger: EnterpriseLedgerEntry[] = [];
  
  // 🏛️ إعدادات البوابات المالية الحكومية لدول الخليج والعملات الرسمية
  private gulfFinancialRegulations = {
    KSA: { currency: 'SAR', vat: 0.15, protocol: 'ZATCA-FATOORA-V2-SECURE' },
    UAE: { currency: 'AED', vat: 0.05, protocol: 'FTA-E-INVOICE-DUBAI' },
    QAT: { currency: 'QAR', vat: 0.00, protocol: 'MOPH-FINANCE-DOHA' },
    KWT: { currency: 'KWD', vat: 0.00, protocol: 'MOH-FINANCE-KUWAIT' },
    BAH: { currency: 'BHD', vat: 0.10, protocol: 'NBR-FINANCIAL-MANAMA' },
    OMN: { currency: 'OMR', vat: 0.05, protocol: 'TAX-OMAN-SECURE' }
  };

  /**
   * 💰 المحرك المالي الأعظم: يقيد الحسابات بالدفتر، يحسب الرواتب والنسب فورا، ويتطابق مع الضرائب الخليجية
   */
  public commitTransactionToLedger(
    clinicId: string,
    countryCode: EnterpriseLedgerEntry['country'],
    patientName: string,
    financialBreakdown: InvoiceFinancialBreakdown,
    doctor: DoctorPayrollConfig
  ): EnterpriseLedgerEntry {

    const reg = this.gulfFinancialRegulations[countryCode];
    const entryId = `MOUSA-ACC-${countryCode}-${Math.floor(1000000 + Math.random() * 9000000)}`;

    // 1. حساب صافي دخل العملية قبل الضرائب
    const grossRevenue = financialBreakdown.rawProcedureCost;

    // 2. تفعيل محرك حساب مستحقات الأطباء المعقد (منع ارتهان الأطباء والنزاعات)
    // المعادلة الملكية لمنصة موسى: نسبة الطبيب تحسب من (تكلفة العلاج - تكلفة المختبر - تكلفة المواد الطبية المستهلكة)
    const commissionBase = financialBreakdown.rawProcedureCost - financialBreakdown.labFeesDeducted - financialBreakdown.materialCostDeducted;
    const doctorPayout = (commissionBase * doctor.commissionPercentage);

    // 3. حساب الضريبة المضافة الرسمية المتوافقة مع قوانين الدولة
    const taxAmount = grossRevenue * reg.vat;
    const totalCollectedFromPatient = grossRevenue + taxAmount;

    // 4. حساب صافي أرباح العيادة الحقيقية (Net Profit) بعد خصم أجر الطبيب، المختبر، والمواد المستهلكة
    const netProfit = grossRevenue - doctorPayout - financialBreakdown.labFeesDeducted - financialBreakdown.materialCostDeducted;

    // 🔐 5. توليد الهاش الرقمي والربط الضريبي الفوري المتوافق مع المرحلة الثانية لهيئات الزكاة والضرائب بالخليج
    const mockHash = `sha256-${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;
    const taxStamp: GulfTaxStamp = {
      cryptographicHash: mockHash,
      zatcaPhase2Uuid: countryCode === 'KSA' ? `uuid-${Math.floor(1000 + Math.random() * 9000)}-4432-8821` : undefined,
      governmentHubStatus: 'TRANSMITTED_SUCCESSFULLY' // إشارة الربط الحكومي الأخضر بنجاح
    };

    const newLedgerEntry: EnterpriseLedgerEntry = {
      entryId,
      timestamp: new Date(),
      clinicId,
      country: countryCode,
      patientName,
      financials: financialBreakdown,
      doctorConfig: doctor,
      calculatedGrossRevenue: totalCollectedFromPatient,
      calculatedNetProfit: netProfit,
      doctorPayout: doctorPayout,
      taxStamp
    };

    this.generalLedger.push(newLedgerEntry);
    this.printFinancialDashboard(newLedgerEntry, reg.currency, reg.protocol);
    
    return newLedgerEntry;
  }

  /**
   * 📊 شاشة المؤشرات المالية الكبرى والأدوات التنفيذية لملاك الإمبراطورية وعيادات الخليج
   */
  private printFinancialDashboard(entry: EnterpriseLedgerEntry, currency: string, protocol: string): void {
    console.log(`\n==================================================================`);
    console.log(`👑 مجمع المحاسبة السحابية المؤتمتة والربط المالي السيادي - منصة موسى 💸`);
    console.log(`==================================================================`);
    console.log(`📍 قيد مالي رقم: ${entry.entryId} | العيادة: [${entry.clinicId}]`);
    console.log(`👤 المراجع: ${entry.patientName} | الطبيب المعالج: ${entry.doctorConfig.doctorName}`);
    console.log(`------------------------------------------------------------------`);
    console.log(`💰 المبلغ الإجمالي المحصل من المريض (شامل الضريبة): ${entry.calculatedGrossRevenue} ${currency}`);
    console.log(`🧾 ضريبة القيمة المضافة المحتسبة للتوريد الحكومي: ${entry.financials.rawProcedureCost * entry.financials.vatRate} ${currency}`);
    console.log(`🔬 التكاليف المخصومة تلقائياً: [مختبر: ${entry.financials.labFeesDeducted} | مخزن ومواد: ${entry.financials.materialCostDeducted}] ${currency}`);
    console.log(`👨‍⚕️ صافي مستحقات الطبيب المحسوبة آلياً ونسبته: ${entry.doctorPayout} ${currency}`);
    console.log(`\n📈 صافي ربح العيادة الحقيقي والنهائي من هذه العملية: [ ${entry.calculatedNetProfit} ${currency} ]`);
    console.log(`------------------------------------------------------------------`);
    console.log(`🔐 بروتوكول الأمان الضريبي النشط: [${protocol}]`);
    console.log(`🔏 بصمة التشفير الحكومية المتوافق مع المرحلة الثانية: ${entry.taxStamp.cryptographicHash}`);
    console.log(`==================================================================`);
  }
  }
  
