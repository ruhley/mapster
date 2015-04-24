<?php
namespace App\Model\Table;

use App\Model\Entity\ChapterVersion;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * ChapterVersions Model
 */
class ChapterVersionsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        $this->table('chapter_versions');
        $this->displayField('name');
        $this->primaryKey('id');
        $this->addBehavior('Timestamp');
        $this->belongsTo('Media', [
            'foreignKey' => 'media_id'
        ]);
        $this->belongsTo('Chapters', [
            'foreignKey' => 'chapter_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->add('id', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('id', 'create')
            ->requirePresence('name', 'create')
            ->notEmpty('name')
            ->allowEmpty('description')
            ->allowEmpty('image')
            ->allowEmpty('link')
            ->add('sequence', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('sequence')
            ->add('media_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('media_id', 'create')
            ->notEmpty('media_id')
            ->add('chapter_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('chapter_id', 'create')
            ->notEmpty('chapter_id');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['media_id'], 'Media'));
        $rules->add($rules->existsIn(['chapter_id'], 'Chapters'));
        return $rules;
    }
}
