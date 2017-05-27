<?php

namespace AppBundle\Controller;

use AppBundle\Model\IssueQuery;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction(Request $request)
    {

        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/issue/", name="issue")
     */
    public function issueAction(Request $request){
        $question = $request->get('question');

        $issue = IssueQuery::create()->filterByQuestion($question)->findOne();
        if(null === $issue){
            return $this->json(['error' => true]);

        }else{
            return $this->json(['answer' => $issue->getAnswer()]);
        }
    }
}
