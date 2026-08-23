// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون: مجمع التواصل السيبراني الشامل، بوت التعليمات السريرية الآلي، ومحرك الأمان لسمعة العيادات

export interface IncomingMessage {
  messageId: string;
  patientId: string;
  channel: 'WhatsApp' | 'Instagram' | 'In-App-Chat' | 'Voice-Call';
  rawText: string;
  detectedDialect: 'Najdi' | 'Emirati' | 'Kuwaiti' | 'Hijazi' | 'Standard-Arabic';
}

export interface PostOpClinicalPlan {
  patientName: string;
  phoneNumber: string;
  procedureType: 'Dental-Implant' | 'Surgical-Extraction' | 'Teeth-Whitening' | 'Orthodontic-Bonding';
  completionTime: Date;
  preferredDialect: string;
}

export interface SentimentAnalysisTicket {
  ticketId: string;
  patientName: string;
  score: number; // النطاق من 1 (غاضب جداً) إلى 5 (سعيد جداً)
  feedbackText: string;
  reputationStatus: 'Route-To-Google-Maps' | 'ALERT-CLINICAL-DIRECTOR';
}

export class MousaPatientEngagementCenter {
  private activeTickets: SentimentAnalysisTicket[] = [];

  // 🗣️ قاموس الذكاء الاصطناعي السحابي للردود والتعليمات السريرية الفورية بعد العمليات حسب اللهجة
  private postOpDialectInstructions = {
    Dental_Implant: {
      Najdi: "يا طويل العمر، تونا مخلصين زراعة السن بنجاح. تكفى الحين عض على الشاش بقوة لمدة ساعة، ولا تشرب شيء حار أبد اليوم، والوصفة الطبية ارسلناها لجوالك.",
      Emirati: "مرحبا الساع يا خوي، الحمدلله على سلامتك بعد الزراعة. الحين واظب تعض على الشاش عدل لمدة ساعة، وابعد عن الأكل الحار فديتك، والوصفة بتوصلك الحين."
    },
    Surgical_Extraction: {
      Kuwaiti: "خطاك السوء يا بعد عمري، الجراحة تمت بخير. يبه خلك عاض على الشاش ساعة كاملة، ولا تمضمض ولا تبصق وايد عشان الجرح يلتئم، ومسكن الألم اخذه الحين.",
      Hijazi: "الحمدلله على سلامتك يا سيدي دحين خلصنا خلع الضرس. الله يسعدك خلي الشاش في فمك ساعة، ولا تمضمض بموية حارة اليوم أبد، والمسكنات تلاقيها في الصيدلية."
    },
    General_Standard: {
      Standard_Arabic: "عزيزنا المراجع، نرجو الالتزام بتعليمات الطبيب بعد العملية: ابقِ الشاش في مكان الجرح لمدة ساعة، وتجنب البصق أو تناول المأكولات والمشروبات الساخنة تماماً اليوم."
    }
  };

  /**
   * 🤖 1. محرك التوجيه الفوري (Omni-Channel Router): يحلل محادثات وقنوات المرضى ويوجهها تلقائياً
   */
  public routeIncomingPatientInquiry(inquiry: IncomingMessage): string {
    let department = "General-Reception";
    const text = inquiry.rawText.toLowerCase();

    console.log(`\n[📡 رادار موسى السيبراني]: تم استقبال رسالة عبر [${inquiry.channel}] من مريض رقم: ${inquiry.patientId}`);

    // تحليل نية المريض برمجياً فورياً لسرعة الاستجابة ومنع تذمره
    if (text.includes("عوار") || text.includes("ألم") || text.includes("يموت") || text.includes("ينزف")) {
      department = "🚨 الطوارئ والمدير الطبي المناوب";
    } else if (text.includes("موعد") || text.includes("أحجز") || text.includes("أغير")) {
      department = "🗓️ قسم الجدولة وعلاقات المرضى";
    } else if (text.includes("كم سعر") || text.includes("فاتورة") || text.includes("غالي")) {
      department = "💰 القسم المالي والحسابات";
    }

    console.log(`🤖 [تحليل النية]: الرسالة مكتوبة بلهجة [${inquiry.detectedDialect}]. جاري تحويل المحادثة فوراً إلى -> [${department}]`);
    return department;
  }

  /**
   * ⏱️ 2. بوت التعليمات السريرية التلقائي (Post-Op Automation): يرسل نصائح العناية بعد العمليات بدون تدخل الموظفين
   */
  public triggerAutomatedPostOpCare(plan: PostOpClinicalPlan): void {
    console.log(`\n==================================================================`);
    console.log(`⚡ محرك العناية الفورية بعد العمليات - منصة موسى الأوتوماتيكية ⏱️`);
    console.log(`==================================================================`);
    console.log(`👤 المراجع الكريم: ${plan.patientName} | هاتف: ${plan.phoneNumber}`);
    console.log(`🦷 نوع العملية المكتملة بالعيادة: [${plan.procedureType}]`);

    let messageText = this.postOpDialectInstructions.General_Standard.Standard_Arabic;

    // توجيه الرسالة والمضمون الطبي بناءً على تخصص العملية ولهجة المريض المفضلة
    if (plan.procedureType === 'Dental-Implant') {
      if (plan.preferredDialect === 'Najdi') messageText = this.postOpDialectInstructions.Dental_Implant.Najdi;
      if (plan.preferredDialect === 'Emirati') messageText = this.postOpDialectInstructions.Dental_Implant.Emirati;
    } else if (plan.procedureType === 'Surgical-Extraction') {
      if (plan.preferredDialect === 'Kuwaiti') messageText = this.postOpDialectInstructions.Surgical_Extraction.Kuwaiti;
      if (plan.preferredDialect === 'Hijazi') messageText = this.postOpDialectInstructions.Surgical_Extraction.Hijazi;
    }

    console.log(`✉️ [إرسال تلقائي عبر WhatsApp]: "${messageText}"`);
    console.log(`------------------------------------------------------------------`);
  }

  /**
   * 🛡️ 3. صمام أمان السمعة ورضا المراجعين (Sentiment & Reputation Shield)
   * يحمي تقييم العيادة على الإنترنت ويوجه المرضى السعداء لخرائط جوجل، ويحجز الغاضبين لحل مشاكلهم فوراً
   */
  public analyzePatientFeedbackAndShieldReputation(patientName: string, textFeedback: string, ratingScore: number): SentimentAnalysisTicket {
    let action: SentimentAnalysisTicket['reputationStatus'] = 'Route-To-Google-Maps';
    const ticketId = `TCK-${Math.floor(10000 + Math.random() * 90000)}`;

    if (ratingScore <= 3) {
      action = 'ALERT-CLINICAL-DIRECTOR';
    }

    const newTicket: SentimentAnalysisTicket = {
      ticketId,
      patientName,
      score: ratingScore,
      feedbackText: textFeedback,
      reputationStatus: action
    };

    this.activeTickets.push(newTicket);

    console.log(`\n==================================================================`);
    console.log(`🛡️ درع حماية سمعة العيادات الرقمي - منصة موسى العظمى 🛡️`);
    console.log(`==================================================================`);
    console.log(`👤 المراجع: ${patientName} | تقييمه للتجربة: [ ${ratingScore} / 5 ]`);
    console.log(`📝 نص التعليق الوارد: "${textFeedback}"`);

    if (action === 'Route-To-Google-Maps') {
      console.log(`✨ [AI Action]: المريض سعيد جداً! البوت يرسل له تلقائياً رابط خرائط جوجل الخاص بالعيادة مع رسالة: "شرفتنا بزيارتك يا فندم، لطفاً شارك تجربتك الممتازة معنا لدعم العيادة."`);
    } else {
      console.log(`🚨 [AI Action - حظر فوري]: تم حظر توجيه المريض للمواقع العامة لحماية السمعة! تم فتح تذكرة طوارئ برقم [${ticketId}] وإرسال تنبيه فوري لجوال المدير الطبي للاتصال بالمريض وحل شكواه داخلياً خلال 15 دقيقة.`);
    }
    console.log(`------------------------------------------------------------------`);

    return newTicket;
  }
  }
